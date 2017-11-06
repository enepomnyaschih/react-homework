import PropTypes from 'prop-types';
import React, { Component } from 'react';

class FilterForm extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  render() {
    var {filter} = this.props;
    return (
      <form>
        <input type="text" value={filter} onChange={this.handleChange}/>
      </form>
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
