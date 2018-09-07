import React from 'react';
import Modal from 'react-responsive-modal';
import styled from 'styled-components';
 
const AddNewUserText = styled.div`
`
const InputBox = styled.input` 
`
const OkayButton = styled.button`
`
const CancelButton = styled.button`
`

class AddUserModal extends React.Component {
    render() {
        let open = this.props.showAddUserModal;
        
        return (
            <Modal open={open} onClose={this.props.handleCloseAddUserModal} center>
                <AddNewUserText>Add New User</AddNewUserText>
                <InputBox placeholder="Ex: Phudith" id="name_input"></InputBox>
                <OkayButton onClick={this.props.addUser}>Add</OkayButton>
                <CancelButton onClick={this.props.handleCloseAddUserModal}>Cancel</CancelButton>
            </Modal>
        );
    }
}
    
    export default AddUserModal;