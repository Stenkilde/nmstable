import React, {
    Component,
    PropTypes
} from 'react';
import Modal from './modal';

export default class ElementCard extends Component {
    static propTypes = {
        element: PropTypes.object
    };

    state = {
        isModalOpen: false,
        element: {}
    };

    handleOpen(element) {
        this.setState({ 
        	isModalOpen: true,
        	element: element
        });
    }

    handleClose() {
        this.setState({ 
        	isModalOpen: false,
        	element: {}
        });
    }

    render() {
        const {
            element
        } = this.props;


        return (
            <div className="card"  onClick={this.handleOpen.bind(this, element)}>
                <div className={'card__background ' + element.type}>
                    <h2 className="card__name">{element.name}</h2>
                    <h3 className="card__chemical">{element.chemical}</h3>
                    <h3 className="card__type">{element.type}</h3>
                    <h3 className="card__value">{element.value}</h3>
                </div>
                {this.state.isModalOpen && (
          			<Modal onClose={this.handleClose.bind(this)}>
          				{this.state.element.name}
          				{this.state.element.chemical}
          				{this.state.element.type}
          				{this.state.element.value}
            			<button onClick={this.handleClose.bind(this)}>Close</button>
          			</Modal>
        		)}
            </div>
        );
    }
}