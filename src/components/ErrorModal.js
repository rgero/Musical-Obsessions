import React from 'react';
import Modal from 'react-modal';

const ErrorModal = (props) =>
    (
        <Modal
            isOpen={!!props.errorMessage}
            contentLabel='Error with Form' // This is for people who have accessiblity options enabled.
            onRequestClose={props.clearError} // This is fired if you click in the background or the escape key.
            closeTimeoutMS={200}
            className='modal'
        >
            {props.errorMessage && 
                <div>
                    <h2>Error</h2>
                    <div>{props.errorMessage}</div>
                    <div><button className='button' onClick={props.clearError}>Close</button></div>
                </div>
            }
        </Modal>
    )

export default ErrorModal