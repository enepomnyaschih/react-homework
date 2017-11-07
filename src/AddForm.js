import PropTypes from 'prop-types';
import React, { Component } from 'react';
import {Button, ControlLabel, Form, FormControl, FormGroup, Panel} from 'react-bootstrap';
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
    const {name, duration} = this.state,
      nameValid = !!name,
      durationValid = duration && !isNaN(+duration) && (+duration >= 0);
    return (
      <Panel header="Add new">
        <Form onSubmit={this.handleSubmit}>
          <FormGroup controlId="name" validationState={nameValid ? 'success' : 'error'}>
            <ControlLabel>Name</ControlLabel>
            <FormControl type="text" value={name} onChange={this.handleChange}/>
          </FormGroup>
          <FormGroup controlId="duration" validationState={durationValid ? 'success' : 'error'}>
            <ControlLabel>Duration (seconds)</ControlLabel>
            <FormControl type="text" value={duration} onChange={this.handleChange}/>
          </FormGroup>
          <Button type="submit" disabled={!nameValid || !durationValid}>Add</Button>
        </Form>
      </Panel>
    );
  }

  handleChange(e) {
    this.setState({[e.target.id]: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    const {name, duration} = this.state;
    this.props.onAdd(TaskModel.create({name, duration: +duration}));
    this.setState({
      name: '',
      duration: ''
    });
  }
}

export default AddForm;

AddForm.propTypes = {
  onAdd: PropTypes.func.isRequired
};
