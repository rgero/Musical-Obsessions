import React from 'react';
import Header from './Header';

import Credentials from '../Credentials';

export class IndexPage extends React.Component
{
    constructor(props)
    {
        super(props)

        // Class Variables
        var AUTH_ENDPOINT = Credentials["AUTH_ENDPOINT"];
        var CLIENT_ID = Credentials["API_KEY"]
        var REDIRECT_URI = Credentials["REDIRECT_URL"]
        var RESPONSE_TYPE = "token";
        this.authURL = `${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`;

        this.parseToken = this.parseToken.bind(this);
        this.state = {
            token : this.props.token ? this.props.token : ""
        }
    }

    componentDidMount()
    {
        this.parseToken()
    }

    parseToken()
    {
        const hash = window.location.hash
        let token = window.localStorage.getItem("token")
  
        if (!token && hash) {
            token = hash.substring(1).split("&").find(elem => elem.startsWith("access_token")).split("=")[1]
  
            window.location.hash = ""
            window.localStorage.setItem("token", token)
        }
  
        this.setState(()=>({
            token : token
        }))
    }

    render()
    {
        return(
            <div>
              <Header/> 
              <div className='content-container'>
                <div className='content-container__title'>
                  Welcome to Musical Obsessions
                </div>
                <div>
                    This purpose of this website is to create a Spotify Playlist of your most listened songs over the a set period of time.
                </div>
                <div className="content-center">
                    <a className='button--spotify' href={this.authURL}>Login to Spotify!</a>
                </div>
              </div>
            </div>
          )
    }
}

export default IndexPage;