# Musical Obsessions
------

The purpose of this project is to create a React Website that will exercise the Spotify REST API to get a user's most listened to tracks over a set duration and generate a playlist for them.

# Hosting

Currently this project is hosted on Heroku at - https://musicalobsession.herokuapp.com/. It is important to note that this is the free tier of the site so performance might take a hit over time. Should this project grow or I expand upon it, I might move tiers but for now I just want an example of it working.

# Known Issues
- Right now there is an issue with the Spotify API creating private playlists. The response says that the playlist has been created, and that the playlist is private however both the Web Interface and the Desktop interface report that the playlist is public. Spotify has had issues with this in the past.
 
# Future Enhancements
- Currently the website gets the response token as a piece of the return URL. I would love to wrap this around a call with Axios. I'm currently investigating how to pass along the scopes that I'd need in order to do that.
- Other Music Platforms - While I only use Spotify as my music provider, I know that Amazon Music, and YouTube music both exist. I haven't investigated if there are publically available APIs to achieve the same goal, but it would be nice to have that in the future.