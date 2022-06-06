import React from 'react';
import Header from './Header';
import PlaylistForm from './PlaylistForm';

const OptionsPage = (props) => (
    <div>
        <Header/> 
        <PlaylistForm token={props.token}/>
    </div>
);

export default OptionsPage;
