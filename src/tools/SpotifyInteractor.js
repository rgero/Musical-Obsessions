import axios from "axios";

export default class SpotifyInteractor
{
    constructor(options)
    {
        this.token = options["token"]
        this.duration = options["duration"]
        this.songCount = options["count"]
        this.playlistName = options["playlistName"]
        this.playlistVisibility = options["visibility"]
        this.playlistDescription = options["description"]

        this.songList = [];

        this.userID = "";
        this.playlistID = "";
    }

    async GetDataFromURL(targetURL, inputParams = {})
    {
        const data = await axios.get(targetURL, {
            headers: {
                Authorization: `Bearer ${this.token}`,
            },
            params : inputParams
        }).catch(error => {
            return null;
        })
        return data;
    }

    async PostDataToURL(targetURL, inputData)
    {
        const response = await axios.post(targetURL, inputData, {
            headers: {
                Authorization: `Bearer ${this.token}`,
            }
        });
        return response;
    }

    async GetUserID()
    {
        const {data} = await this.GetDataFromURL("https://api.spotify.com/v1/me");
        this.userID = data["id"];
    }

    async GetPopularTracks()
    {
        const params = {
            limit : this.songCount,
            time_range: this.duration,
        }
        const {data} = await this.GetDataFromURL("https://api.spotify.com/v1/me/top/tracks", params)

        let returnedDataList = data["items"];
        let songIDList = [];
        returnedDataList.forEach(song => {
            songIDList.push(song["uri"]);
        })
        
        this.songList = songIDList;
    }

    async CreatePlaylist()
    {
        if (this.userID === "")
        {
            return;
        }

        const targetURL = `https://api.spotify.com/v1/users/${this.userID}/playlists`;

        const playlistData = {
            name: this.playlistName,
            description: this.playlistDescription,
            public: this.playlistVisibility
        }

        const {data} = await this.PostDataToURL(targetURL, playlistData);
        
        // Return the Playlist ID
        this.playlistID = data["id"]
    }

    async AddSongsToPlaylist()
    {
        if (this.playlistID === "" || this.songList === [])
        {
            return; 
        }

        const targetURL = `https://api.spotify.com/v1/playlists/${this.playlistID}/tracks`
        const targetData = {uris: this.songList};
        await this.PostDataToURL(targetURL, targetData);
    }

    async RunTool()
    {
        await this.GetUserID();

        if (this.userID === null)
        {
            throw "Error validating";
        }

        await this.GetPopularTracks();
        await this.CreatePlaylist();
        await this.AddSongsToPlaylist();
    }
}