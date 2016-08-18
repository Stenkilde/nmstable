import React from 'react';
import {Gateway} from 'react-gateway';
import ReactModal2 from 'react-modal2';
import './Modal.css';

export default class Modal extends React.Component {
  static propTypes = {
    onClose: React.PropTypes.func.isRequired,
    closeOnEsc: React.PropTypes.bool,
    closeOnBackdropClick: React.PropTypes.bool
  };

  render() {
    return (
      <Gateway into="global">
        <ReactModal2
          onClose={this.props.onClose}
          closeOnEsc={this.props.closeOnEsc}
          closeOnBackdropClick={this.props.closeOnEsc}
          backdropClassName='my-custom-backdrop-class'
          modalClassName='my-custom-modal-class'>
          {this.props.children}
        </ReactModal2>
      </Gateway>
    );
  }
}