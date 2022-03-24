import { useDispatch, useSelector } from 'react-redux';
import { InitialState } from 'redux/store';
import { signinUser } from 'redux/actions/users';

export interface InitialUserValues {
  login: string;
  password: string;
}

export const useAuth = () => {
  const usersStore = useSelector((store: InitialState) => store.users);
  const dispatch = useDispatch();

  return (values: InitialUserValues) => {
    const currentUser = usersStore.find((user) => {
      return user.login.toLowerCase() === values.login.toLowerCase() && user.password === values.password;
    });
    if (currentUser) {
      dispatch(signinUser(currentUser.id));
    }
  };
};
