import TaskModel from '../models/Task';

const initialState = {
  list: [
    {name: 'Task 1', duration: 10},
    {name: 'Task 2', duration: 20},
    {name: 'Task 3', duration: 25}
  ].map(TaskModel.create),
  adding: false,
  error: null
};

export default function(state = initialState, action) {
  switch (action.type) {
    case 'ADD_TASK':
      return {
        ...state,
        adding: true,
        error: null
      };
    case 'ADD_TASK_SUCCESS':
      return {
        ...state,
        list: [...state.list, action.task].sort(TaskModel.compare),
        adding: false
      };
    case 'ADD_TASK_ERROR':
      return {
        ...state,
        adding: false,
        error: action.error
      };
    case 'REMOVE_TASK':
      return {
        ...state,
        list: state.list.filter(task => task.id !== action.taskId)
      };
    default:
      return state;
  }
};
