import React from 'react';
import Modal from 'react-responsive-modal';
import styled from 'styled-components';
 
const DeleteUserText = styled.div`
`
const InputBox = styled.input` 
`
const OkayButton = styled.button`
`
const CancelButton = styled.button`
`

class DeleteUserModal extends React.Component {
    render() {
        let open = this.props.showDeleteUserModal;
        
        return (
            <Modal open={open} onClose={this.props.handleCloseDeleteUserModal} center>
                <DeleteUserText>Delete Existing User</DeleteUserText>
                <InputBox placeholder="Ex: Phudith" id="delete_name_input"></InputBox>
                <OkayButton onClick={this.props.deleteUser}>Delete</OkayButton>
                <CancelButton onClick={this.props.handleCloseDeleteUserModal}>Cancel</CancelButton>
            </Modal>
        );
    }
}


     
    export default DeleteUserModal;