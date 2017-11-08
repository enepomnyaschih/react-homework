import React, { Component } from 'react';
import {Grid} from 'react-bootstrap';
import AddFormContainer from '../containers/AddForm';
import FilterFormContainer from '../containers/FilterForm';
import LoginBoxContainer from '../containers/LoginBox';
import TaskListContainer from '../containers/TaskList';

class App extends Component {
  render() {
    return (
      <Grid>
        <LoginBoxContainer/>
        <FilterFormContainer/>
        <TaskListContainer/>
        <AddFormContainer/>
      </Grid>
    );
  }
}

export default App;

App.propTypes = {};
