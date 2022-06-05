import React from 'react'
import ErrorModal from './ErrorModal';

export default class PlaylistForm extends React.Component
{
    constructor(props)
    {
        super(props);

        this.onSubmit = this.onSubmit.bind(this);
        this.onDurationChange = this.onDurationChange.bind(this);
        this.clearError = this.clearError.bind(this);


        this.state = {
            name : this.props.name ? this.props.name : "Hot Songs",
            duration : this.props.duration ? this.props.duration : "short_term",
            songCount : this.props.songCount ? this.props.songCount : 20,
        }
    }

    clearError(){
        this.setState({error: ''})
    }

    onTextChange = (value) => (evt) => {
        var newValue = evt.target.value;
        switch(value){
            case 'name':
                this.setState({
                    name: newValue
                });
                break;
            default:
                break;
        }
    }

    onDurationChange(e){
        const value = e.target.value
        this.setState(()=>({
            duration: value
        }))
    }

    onSubmit(e){
        e.preventDefault();

        //Validate Form;
        var currentError = '';
        if (!this.state.name || !this.state.duration || !this.state.songCount)
        {
            currentError = 'Please inspect the form';
        }
        
        if( currentError === ''){
            this.setState({error: currentError})
            this.props.onSubmit({
                name: this.state.name,
                duration: this.state.duration,
                songCount : this.state.songCount
            });
        } else {
            this.setState({error: currentError})
        }
    }

    render()
    {
        return (
            <form className='form' onSubmit={this.onSubmit}>
                    {this.state.error !== '' && <ErrorModal errorMessage={this.state.error} clearError={this.clearError} />}

                    <div className = 'form__input'>
                        <label className = 'form__label'>Playlist Name</label>
                        <input
                            type='text'
                            className='text-input'
                            placeholder='Hot Songs'
                            autoFocus
                            value={this.state.name}
                            onChange={this.onTextChange('name')}
                        />
                    </div>

                    <div className='form__input'>
                        <label className = 'form__label'>Duration</label>
                        <select value={this.state.duration}
                                onChange={this.onDurationChange}
                        >
                            <option value='short_term'>Last 4 Weeks</option>
                            <option value='medium_term'>Last 6 months</option>
                            <option value='long_term'>Lifetime</option>
                        </select>
                    </div>

                    <div className = 'form__input'>
                        <label className = 'form__label'>Number of Songs</label>
                        <input
                            type='number'
                            className='text-input'
                            placeholder="20"
                            autoFocus
                            value={this.state.accuracy}
                            onChange={this.onNumberChange}
                        />
                    </div>


                    <div className = 'form__input'>
                        <button className='button'>Run Generator</button>
                    </div>
            </form>
        )
    }

}