import React, { Component } from 'react';
import Header from './Header';
import PlaylistForm from './PlaylistForm';
import {withNavigate} from '../tools/WithNavigate';

import SpotifyInteractor from "../tools/SpotifyInteractor";

export class OptionsPage extends React.Component
{
    constructor(props)
    {
        super(props)
        this.onSubmit = this.onSubmit.bind(this);
    }

    async onSubmit(options)
    {
        var interactor = new SpotifyInteractor(options);
        await interactor.RunTool();
        this.props.navigate('/completed')
    }

    render()
    {
        return (
            <div>
                <Header/> 
                <PlaylistForm token={this.props.token} onSubmit={this.onSubmit}/>
            </div>
        );
    }
}

export default withNavigate(OptionsPage);
