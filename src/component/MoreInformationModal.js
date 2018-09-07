import React, { Component } from 'react';
import Modal from 'react-responsive-modal';
import styled from 'styled-components';

class MoreInformationModal extends Component {
    render() {
        return (
            <Modal open={this.props.showMoreInformationModal} onClose={this.props.handleCloseMoreInformationModal} center>

            </Modal>
        );
    }
}

export default MoreInformationModal;