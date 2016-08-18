import React, {
    Component,
    PropTypes
} from 'react';
import Modal from './modal';
import Carousel from 'nuka-carousel';
import './Modal.css';
import '../columns.css';

export default class ElementCard extends Component {
    static propTypes = {
        element: PropTypes.object
    };

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
        const {element} = this.props;


        return (
            <div className="card"  onClick={this.modalHandler.bind(this, true, element)}>
                <div className={'card__background ' + element.type}>
                    <h2 className="card__name">{element.name}</h2>
                    <h3 className="card__chemical">{element.chemical}</h3>
                    <h3 className="card__type">{element.type}</h3>
                    <h3 className="card__value">{element.value}</h3>
                </div>
                {this.state.isModalOpen && (
          			<Modal onClose={this.modalHandler.bind(this, false, {})}>
          				<div className="column6">
                            <Carousel autoplay={true} dragging={false}>
                                {this.state.element.images.map((image, index) => {
                                    return (
                                        <img className="modal__image" src={image.url} key={index} alt=""/>
                                    );
                                })}
                            </Carousel>
                        </div>
                        <div className="column6">
                            <h1 className="modal__header">{this.state.element.name} - {this.state.element.chemical}</h1>
              				<h2 className="modal__subheader">{this.state.element.type}</h2>
                            <p className="modal__description" dangerouslySetInnerHTML={{__html: this.state.element.description}}></p>
                        </div>
                        <button className="button__close" onClick={this.modalHandler.bind(this, false, {})}>x</button>
          			</Modal>
        		)}
            </div>
        );
    }
}