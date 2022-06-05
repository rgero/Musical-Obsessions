import React from 'react';
import {useEffect, useState} from 'react';
import Header from './Header';

import Credientials from "../Credentials";

var AUTH_ENDPOINT = Credientials["AUTH_ENDPOINT"];
var CLIENT_ID = Credientials["API_KEY"]
var REDIRECT_URI = Credientials["REDIRECT_URL"]
var RESPONSE_TYPE = "token";
var authURL = `${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`;

function IndexPage() 
{
  const [token, setToken] = useState("")

  useEffect(() => {
      const hash = window.location.hash
      let token = window.localStorage.getItem("token")

      if (!token && hash) {
          token = hash.substring(1).split("&").find(elem => elem.startsWith("access_token")).split("=")[1]

          window.location.hash = ""
          window.localStorage.setItem("token", token)
      }

      setToken(token)

  }, [])

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
        <div>
            <a className='button--spotify' href={authURL}>Login to Spotify!</a>
        </div>
        <div>
        </div>
      </div>
    </div>
  )

}

export default IndexPage;
