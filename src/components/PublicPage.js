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
            <div className="content-center">
                <a className='button--spotify' href={props.authURL}>Login to Spotify!</a>
            </div>
        </div>
    </div>
);

export default PublicPage;
