import PropTypes from 'prop-types';
import React, { Component } from 'react';
import {Grid} from 'react-bootstrap';
import TaskModel from './models/Task';
import AddForm from './AddForm';
import FilterForm from './FilterForm';
import TaskList from './TaskList';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: (props.defaultTasks || []).sort(TaskModel.compare),
      filter: ''
    };
    this.handleFilter = this.handleFilter.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
  }

  render() {
    const {tasks, filter} = this.state;
    return (
      <Grid>
        <FilterForm filter={filter} onFilter={this.handleFilter}/>
        <TaskList tasks={tasks} filter={filter} onRemove={this.handleRemove}/>
        <AddForm onAdd={this.handleAdd}/>
      </Grid>
    );
  }

  handleFilter(filter) {
    this.setState({filter});
  }

  handleAdd(task) {
    this.setState({tasks: [...this.state.tasks, task].sort(TaskModel.compare)});
  }

  handleRemove(id) {
    this.setState({tasks: this.state.tasks.filter((task) => task.id !== id)});
  }
}

export default App;

App.propTypes = {
  defaultTasks: PropTypes.arrayOf(TaskModel.propTypes)
};
