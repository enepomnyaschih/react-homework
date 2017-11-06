import PropTypes from 'prop-types';
import React, { Component } from 'react';
import TaskModel from './models/Task';

class TaskList extends Component {
  render() {
    const {tasks, filter, onRemove} = this.props;
    return (
      <ul>
        {tasks.filter((task) => task.name.indexOf(filter) !== -1).map((task) => (
          <li key={task.id}><i className="fa fa-close" onClick={() => onRemove(task)}/> {task.name} - {task.duration} seconds</li>
        ))}
      </ul>
    );
  }
}

export default TaskList;

TaskList.propTypes = {
  tasks: PropTypes.arrayOf(TaskModel).isRequired,
  filter: PropTypes.string.isRequired,
  onRemove: PropTypes.func.isRequired
};
