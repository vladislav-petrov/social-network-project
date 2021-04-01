import React from 'react';
import style from './Form.module.css';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSubmitOnEnter = this.handleSubmitOnEnter.bind(this);
  }

  handleChange(event) {
    this.props.changeContainerState(event);
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.addUnit();
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
          className={style.Text}
          value={this.props.textValue}
          onChange={this.handleChange}
          onKeyDown={this.handleSubmitOnEnter}
        />
        <input
          className={style.Submit}
          type='submit'
          value={this.props.submitValue}
        />
      </form>
    );
  }
}

export default Form;
