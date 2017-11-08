import {connect} from 'react-redux';
import {addTask, addTaskSuccess, addTaskError} from '../actions/tasks';
import AddForm from '../components/AddForm';

export default connect(
  state => ({
    adding: state.tasks.adding,
    error: state.tasks.error
  }),
  dispatch => ({
    onAdd: () => dispatch(addTask),
    onAddSuccess: task => dispatch(addTaskSuccess(task)),
    onAddError: error => dispatch(addTaskError(error))
  })
)(AddForm);
