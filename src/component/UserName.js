import React, { Component } from 'react';
import styled from 'styled-components';

const UserNameContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-right: 10px;
  text-align: center
  border: solid 1px;
  border-radius: 25px;
  padding: 10px;
  background-color: orange;
  cursor: grab;
  font-family: Chalkduster;

  :hover {
      background-color: #313D48;
      color: white;
  }
`

class UserName extends Component {
    render() {
        return (
            <div>
                <UserNameContainer 
                    draggable = {true}
                    onDragStart = {(e) => this.props.onDragStart(e, this.props.id)}
                >
                    {this.props.id}
                </UserNameContainer>
            </div>
        )
    }
}

export default UserName;
