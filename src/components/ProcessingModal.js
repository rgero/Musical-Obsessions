import React from 'react';
import Modal from 'react-modal';

const ProcessingModal = (props) =>
    (
        <Modal
            isOpen={!!props.processing}
            contentLabel='Processing your playlist' // This is for people who have accessiblity options enabled.
            onRequestClose={props.clearProcessing} // This is fired if you click in the background or the escape key.
            closeTimeoutMS={200}
            className='modal'
        >
            {props.processing && 
                <div>
                    <h1>Processing Your Playlist</h1>
                    <div className='loader'>
                        <img className='loader__image' src='/img/loader.gif' width="100" height="100"/>
                    </div>
                    <div>Your playlist is currently being generated, this might take awhile based on the number of songs you've picked</div>
                </div>
            }
        </Modal>
    )

export default ProcessingModal