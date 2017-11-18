import PropTypes from 'prop-types';
import React from 'react';
import {Button, Glyphicon, ListGroup, ListGroupItem} from 'react-bootstrap';
import TaskModel from '../models/Task';

function TaskList({tasks, filter, onRemove}) {
  return (
    <ListGroup>
      {tasks.filter(task => task.name.indexOf(filter) !== -1).map(task => (
        <ListGroupItem key={task.id}>
          <Button bsStyle="danger" onClick={() => onRemove(task.id)}>
            <Glyphicon glyph="remove"/>
          </Button>
          {' '}<b>{task.name}</b> - {task.duration} seconds
        </ListGroupItem>
      ))}
    </ListGroup>
  );
}

export default TaskList;

TaskList.propTypes = {
  tasks: PropTypes.arrayOf(TaskModel.propTypes).isRequired,
  filter: PropTypes.string.isRequired,
  onRemove: PropTypes.func.isRequired
};
