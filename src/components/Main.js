import React from 'react';
import {Grid} from 'react-bootstrap';
import AddFormContainer from '../containers/AddForm';
import FilterFormContainer from '../containers/FilterForm';
import LoginBoxContainer from '../containers/LoginBox';
import TaskListContainer from '../containers/TaskList';

function Main() {
  return (
    <Grid>
      <LoginBoxContainer/>
      <FilterFormContainer/>
      <TaskListContainer/>
      <AddFormContainer/>
    </Grid>
  );
};

export default Main;

Main.propTypes = {};
