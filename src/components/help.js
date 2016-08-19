import React, {Component} from 'react';
import Modal from './modal';
import './help.css';

export default class Help extends Component {

	state = {
        isModalOpen: false,
        element: {}
    };

    modalHandler(state, element) {
        this.setState({
            isModalOpen: state,
            element: element
        })
    }

    render() {
        return (
        	<div>
	            <a href="#" onClick={() => this.modalHandler(true)} className="help">
	            	Want to help?
	            </a>
	            {this.state.isModalOpen && (
          			<Modal onClose={() => this.modalHandler(false)}>
          				<div className="help__modal">
							<h1>Want to help?</h1>
							<p>As I'm doing this project alone, I can't take all the images myself, so if you want to contribute do the following</p>
							<ul>
								<li>Take screenshot of element (Preferable without the HUD)</li>
								<li>Upload it to imgur or other image source (Preferable in 1080p, 720p or higher)</li>
								<li>Throw me a link on reddit on <a href="http://reddit.com/u/stenkilde" target="_blank">/u/stenkilde</a>, also add username for the credits</li>
								<li>Wait for image to be uploaded</li>
							</ul>
							<h1>Background</h1>
							<p>I'm also looking for a way nicer background for it all, so send me those as well!</p>
						</div>
          			</Modal>
        		)}
            </div>
        );
    }
}