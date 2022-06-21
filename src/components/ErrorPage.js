import React from 'react';
import Header from './Header';

const ErrorPage = () => (
  <div>
    <Header/>
    <div className='content-container'>
      <div className='content-container__title'>
        An error has occurred.
      </div>
      <div>
        An error has occurred with the the Spotify Interaction tool. This is likely because the application is still "in development" according to Spotify, so only registered users can use it.
      </div>
    </div>
  </div>
);

export default ErrorPage;
