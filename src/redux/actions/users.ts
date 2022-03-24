import { User } from 'redux/store';

export const ADD_USER = 'ADD_USER';
export const SIGNIN_USER = 'SIGNIN_USER';
export const EXIT_USER = 'EXIT_USER';

export const addUser = (user: User) => {
  return {
    type: ADD_USER,
    payload: {
      user,
    },
  };
};

export const signinUser = (id: number) => {
  return {
    type: SIGNIN_USER,
    payload: {
      id,
    },
  };
};

export const exitUser = () => {
  return {
    type: EXIT_USER,
  };
};
