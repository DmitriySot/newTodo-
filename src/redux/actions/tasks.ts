import { Task } from 'redux/store';

export const ADD_TASK = 'ADD_TASK';
export const DEL_TASK = 'DEL_TASK';
export const EDIT_TASK = 'EDIT_TASK';
export const CHECK_TASK = 'CHECK_TASK';
export const SEARCH_TASK = 'SEARCH_TASK';

export function addTask(task: Task) {
  return {
    type: ADD_TASK,
    payload: {
      task,
    },
  };
}
export function delTask(id: number) {
  return {
    type: DEL_TASK,
    payload: {
      id,
    },
  };
}
export function editTask(task: Task) {
  return {
    type: EDIT_TASK,
    payload: {
      task,
    },
  };
}

export function onChecked(id: number) {
  return {
    type: CHECK_TASK,
    payload: {
      id,
    },
  };
}

export function searchTask(search: string) {
  return {
    type: SEARCH_TASK,
    payload: {
      search,
    },
  };
}
