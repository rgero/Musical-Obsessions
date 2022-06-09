import React from 'react';
import Credentials from '../Credentials';

import PublicPage from './PublicPage';
import OptionsPage from './OptionsPage';

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
        var scope = "playlist-modify-public playlist-modify-private"
        this.authURL = `${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`;
        this.authURL += "&scope=" + encodeURIComponent(scope);

        this.parseToken = this.parseToken.bind(this);

        this.state = {
            token : this.props.token ? this.props.token : "",
        }
    }

    componentDidMount()
    {
        this.parseToken()
    }

    parseToken()
    {
        const hash = window.location.hash
        let token;

  
        if (!token && hash) {
            token = hash.substring(1).split("&").find(elem => elem.startsWith("access_token")).split("=")[1]
        }
  
        this.setState(()=>({
            token : token,
        }))
    }

    render()
    {
        // If the user has a token, 
        if (this.state.token)
        {
            return ( <OptionsPage token={this.state.token}/> )
        } 
        else 
        {
            return( <PublicPage authURL={this.authURL}/> )
        }
    }
}

export default IndexPage;