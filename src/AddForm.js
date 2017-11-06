import PropTypes from 'prop-types';
import React, { Component } from 'react';
import TaskModel from './models/Task';

class AddForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      duration: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  render() {
    const {name, duration} = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" name="name" value={name} onChange={this.handleChange}/>
        <input type="text" name="duration" value={duration} onChange={this.handleChange}/>
        <input type="submit"/>
      </form>
    );
  }

  handleChange(e) {
    this.setState({[e.target.name]: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    let {name, duration} = this.state;
    if (duration && !isNaN(+duration)) {
      this.props.onAdd(TaskModel.create({name, duration: +duration}));
      this.setState({
        name: '',
        duration: ''
      });
    }
  }
}

export default AddForm;

AddForm.propTypes = {
  onAdd: PropTypes.func.isRequired
};
