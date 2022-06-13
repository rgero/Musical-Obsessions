import React from 'react';
import Header from './Header';
import PlaylistForm from './PlaylistForm';
import {withNavigate} from '../tools/WithNavigate';

import SpotifyInteractor from "../tools/SpotifyInteractor";
import ProcessingModal from './ProcessingModal';

export class OptionsPage extends React.Component
{
    constructor(props)
    {
        super(props)
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            processing: this.props.processing ? this.props.processing : false
        }
    }

    async onSubmit(options)
    {
        this.setState({
            processing: true
        })
        var interactor = new SpotifyInteractor(options);
        await interactor.RunTool();
        this.props.navigate('/completed')
    }

    render()
    {
        return (
            <div>
                {this.state.processing !== false && <ProcessingModal processing={this.state.processing}/>}
                <Header/>
                <div className="content-container">
                    <div className='content-container__title'>
                        Playlist Options
                    </div>
                    <div>
                        Please define the options for your new playlist
                    </div>
                    <PlaylistForm token={this.props.token} onSubmit={this.onSubmit}/>
                </div>
            </div>
        );
    }
}

export default withNavigate(OptionsPage);
