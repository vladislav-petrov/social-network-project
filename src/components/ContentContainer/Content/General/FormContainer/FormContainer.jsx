import React from 'react';
import Form from './Form/Form';
import { addPostCreateAction } from '../../../../../redux/feautures/users/usersSlice';
import { addMessageCreateAction } from '../../../../../redux/feautures/users/usersSlice';

class FormContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      inputValue: ''
    };

    this.changeContainerState = this.changeContainerState.bind(this);
    this.addUnit = this.addUnit.bind(this);
  }

  changeContainerState(event) {
    this.setState({
      inputValue: event.target.value
    });
  }

  _createAction() {
    if (this.props.type === 'PostsForm') {
      return addPostCreateAction(
        this.props.userId,
        this.props.userActiveId,
        this.state.inputValue
      );
    }

    if (this.props.type === 'MessagesForm') {
      return addMessageCreateAction(
        this.props.userId,
        this.props.userActiveId,
        this.state.inputValue
      );
    }
  }

  addUnit() {
    this.props.dispatch(this._createAction());

    this.setState({
      inputValue: ''
    });
  }

  _getSubmitValue() {
    if (this.props.type === 'PostsForm') {
      return 'Post';
    }

    if (this.props.type === 'MessagesForm') {
      return 'Send';
    }
  }

  render() {
    return (
      <Form
        textValue={this.state.inputValue}
        submitValue={this._getSubmitValue()}
        changeContainerState={this.changeContainerState}
        addUnit={this.addUnit}
      />
    );
  }
}

export default FormContainer;
