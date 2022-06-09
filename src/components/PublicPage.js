import React from 'react';
import Header from './Header';

const PublicPage = (props) => (
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
                If you choose to use this application, you will be giving the following permissions to the tool.
                <ul>
                    <li>The ability to look at your listening history. This is in order to obtain your most popular songs</li>
                    <li>The ability to create a public or private playlist. This is so it has the ability to generate the desired playlist</li>
                </ul>
                None of these permissions will be stored, nor will any of the data obtained through the Spotify website.
            </div>
            
            <div className="buttonLogin">
                <a className='button--spotify' href={props.authURL}>Login to Spotify!</a>
            </div>
        </div>
    </div>
);

export default PublicPage;
