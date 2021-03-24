import classes from './Form.module.css';
import React from 'react';

class Form extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      inputValue: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSubmitOnEnter = this.handleSubmitOnEnter.bind(this);
  }

  handleChange(event) {
    this.setState({
      inputValue: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.addMessage(
      this.props.person.userData.id,
      this.props.user.userData.id,
      this.state.inputValue
    );

    this.setState({
      inputValue: ''
    });
  }

  handleSubmitOnEnter(event) {
    if (event.key === 'Enter' && !event.shiftKey) {
      this.handleSubmit(event);
    }
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <textarea
          className={classes.Text}
          value={this.state.inputValue}
          onChange={this.handleChange}
          onKeyDown={this.handleSubmitOnEnter}
        />
        <input
          className={classes.Submit}
          type="submit"
          value="Send"
        />
      </form>
    );
  }
}

export default Form;
