export const addTask = {
  type: 'ADD_TASK'
};

export const addTaskSuccess = task => ({
  type: 'ADD_TASK_SUCCESS',
  task
});

export const addTaskError = error => ({
  type: 'ADD_TASK_ERROR',
  error
});

export const removeTask = taskId => ({
  type: 'REMOVE_TASK',
  taskId
});
