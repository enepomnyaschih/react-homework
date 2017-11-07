import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import TaskModel from './models/Task';
import registerServiceWorker from './registerServiceWorker';

const tasks = [
  {name: 'Task 1', duration: 10},
  {name: 'Task 2', duration: 20},
  {name: 'Task 3', duration: 25}
].map(TaskModel.create);

ReactDOM.render(<App defaultTasks={tasks}/>, document.getElementById('root'));
registerServiceWorker();
