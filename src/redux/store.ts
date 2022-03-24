import { createStore } from 'redux';
import { ADD_TASK, CHECK_TASK, DEL_TASK, EDIT_TASK, SEARCH_TASK } from 'redux/actions/tasks';
import { ADD_USER, EXIT_USER, SIGNIN_USER } from 'redux/actions/users';

export interface InitialState {
  tasks: Task[];
  search: string;
  users: User[];
  currentUserId: number | null;
}

export interface User {
  id: number;
  name: string;
  login: string;
  password: string;
  email: string;
}

export interface Task {
  id: number;
  title: string;
  description: string;
  checked: boolean;
  userId?: number;
}

const initialState: InitialState = {
  tasks: [
    {
      userId: 1,
      id: 1,
      title: 'Сделать туду',
      description: 'Сделать чтоб туду работало',
      checked: false,
    },
    {
      id: 2,
      title: 'Create todo',
      description: 'Сделать чтоб туду работало',
      checked: false,
    },
  ],
  search: '',
  currentUserId: null,
  users: [
    {
      id: 1,
      name: 'Penek',
      login: 'Penek',
      password: '12345',
      email: '123@123.ru',
    },
  ],
};

function todos(state = initialState, action: any) {
  const { type, payload } = action;
  switch (type) {
    case ADD_TASK:
      return { ...state, tasks: [...state.tasks, payload.task] };
    case DEL_TASK:
      return { ...state, tasks: state.tasks.filter((item) => item.id !== action.payload.id) };
    case EDIT_TASK:
      const { task } = payload;
      const editedTasks = state.tasks.map((note) => {
        return note.id === task.id ? task : note;
      });
      return { ...state, tasks: editedTasks };
    case CHECK_TASK:
      const { id } = payload;
      const checkedTasks = state.tasks.map((task) => {
        if (id === task.id) {
          return { ...task, checked: !task.checked };
        } else {
          return task;
        }
      });
      return { ...state, tasks: checkedTasks };
    case SEARCH_TASK:
      const { search } = payload;
      return { ...state, search: search };
    case ADD_USER:
      return { ...state, users: [...state.users, payload.user] };
    case SIGNIN_USER:
      return { ...state, currentUserId: payload.id };
    case EXIT_USER:
      return { ...state, currentUserId: null };
  }
  return state;
}

const store = createStore(todos);

export default store;
