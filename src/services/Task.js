import {defer} from '../Utils';
import TaskModel from '../models/Task';

export function create(config) {
  return defer(500).then(() => {
    if (Math.random() > .3) {
      return TaskModel.create(config);
    } else {
      throw new Error('Unable to add the task.');
    }
  });
};
