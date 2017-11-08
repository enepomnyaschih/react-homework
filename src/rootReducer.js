import {combineReducers} from 'redux';
import tasks from './reducers/tasks';
import filter from './reducers/filter';
import loggedIn from './reducers/loggedIn';

export default combineReducers({tasks, filter, loggedIn});
