import PropTypes from 'prop-types';
import React, { Component } from 'react';
import {Form, FormControl, FormGroup, Panel} from 'react-bootstrap';

class FilterForm extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  render() {
    var {filter} = this.props;
    return (
      <Panel header="Filter">
        <Form>
          <FormGroup controlId="filter">
            <FormControl type="text" value={filter} onChange={this.handleChange}/>
          </FormGroup>
        </Form>
      </Panel>
    );
  }

  handleChange(e) {
    this.props.onFilter(e.target.value);
  }
}

export default FilterForm;

FilterForm.propTypes = {
  filter: PropTypes.string.isRequired,
  onFilter: PropTypes.func.isRequired
};
