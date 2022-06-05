import React from 'react';
import PlaylistForm from './PlaylistForm';

export class PlaylistPage extends React.Component
{
    constructor(props)
    {
        super(props)
        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit(options)
    {
        
    }

    render(){
        return(
            <div>
                <div className='page-header'>
                    <div className='content-container'>
                        <h1 className='page-header__title'>Set Playlist Options</h1>
                    </div>
                </div>
                <div className='content-container'>
                    <PlaylistForm onSubmit={this.onSubmit} />
                </div>
            </div>
        )
    }
}

export default PlaylistPage;