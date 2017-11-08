import PropTypes from 'prop-types';
import React, { Component } from 'react';
import {Button, ControlLabel, Form, FormControl, FormGroup, Glyphicon, HelpBlock, Panel} from 'react-bootstrap';
import * as TaskService from '../services/Task';

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
    const {adding, error} = this.props,
      {name, duration} = this.state,
      nameValid = !!name,
      durationValid = duration && !isNaN(+duration) && (+duration >= 0);
    return (
      <Panel header="Add new">
        <Form onSubmit={this.handleSubmit}>
          <FormGroup controlId="name" validationState={nameValid ? 'success' : 'error'}>
            <ControlLabel>Name</ControlLabel>
            <FormControl type="text" value={name} onChange={this.handleChange} disabled={adding}/>
          </FormGroup>
          <FormGroup controlId="duration" validationState={durationValid ? 'success' : 'error'}>
            <ControlLabel>Duration (seconds)</ControlLabel>
            <FormControl type="text" value={duration} onChange={this.handleChange} disabled={adding}/>
          </FormGroup>
          {error &&
            <FormGroup validationState={'error'}>
              <HelpBlock>{error}</HelpBlock>
            </FormGroup>
          }
          <Button type="submit" disabled={!nameValid || !durationValid || adding}>
            {adding ? <Glyphicon glyph="repeat" className="spin"/> : 'Add'}
          </Button>
        </Form>
      </Panel>
    );
  }

  handleChange(e) {
    this.setState({[e.target.id]: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    const {onAdd, onAddSuccess, onAddError} = this.props,
      {name, duration} = this.state;
    onAdd();
    TaskService.create({name, duration: +duration}).then(
      task => {
        this.setState({
          name: '',
          duration: ''
        });
        return onAddSuccess(task);
      },
      ex => onAddError(ex.message)
    );
  }
}

export default AddForm;

AddForm.propTypes = {
  adding: PropTypes.bool.isRequired,
  error: PropTypes.string,
  onAdd: PropTypes.func.isRequired,
  onAddSuccess: PropTypes.func.isRequired,
  onAddError: PropTypes.func.isRequired
};
