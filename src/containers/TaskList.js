import {connect} from 'react-redux';
import {removeTask} from '../actions/tasks';
import TaskList from '../components/TaskList';

export default connect(
  state => ({
    tasks: state.tasks.list,
    filter: state.filter
  }),
  dispatch => ({
    onRemove: taskId => dispatch(removeTask(taskId))
  })
)(TaskList);
