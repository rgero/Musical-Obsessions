import React from 'react';
import Header from './Header';

const CompletedPage = () => (
  <div>
    <Header/>
    <div className='content-container'>
      <div className='content-container__title'>
        Playlist has been generated!
      </div>
      <div>
        Your playlist has been generated, feel free to check it out!
      </div>
    </div>
  </div>
);

export default CompletedPage;
