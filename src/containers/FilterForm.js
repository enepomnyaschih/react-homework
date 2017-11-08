import {connect} from 'react-redux';
import {setFilter} from '../actions/filter';
import FilterForm from '../components/FilterForm';

export default connect(
  state => ({
    filter: state.filter
  }),
  dispatch => ({
    onFilter: value => dispatch(setFilter(value))
  })
)(FilterForm);
