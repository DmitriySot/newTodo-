import React from 'react';
import InputField from 'components/InputField';
import { Button, styled } from '@mui/material';
import { InitialState, User } from 'redux/store';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { addUser } from 'redux/actions/users';

const StyledWrapperSignin = styled('div')`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledInputField = styled('div')`
  width: 400px;
`;

const StyledButton = styled(Button)`
  margin-top: 2em;
`;

type UserFormType = Omit<User, 'id'>;

const initialState: UserFormType = {
  name: '',
  login: '',
  password: '',
  email: '',
};

const SignIn = () => {
  const dispatch = useDispatch();
  const usersStore = useSelector((store: InitialState) => store.users);

  const validationSchema = yup.object().shape({
    name: yup.string().min(5).max(15).required('Enter yor name'),
    login: yup
      .string()
      .min(5)
      .max(15)
      .required('Enter your login')
      .test('login', 'enter another', (value) => {
        return !usersStore.find((user) => user.name.toLowerCase().trim() === String(value).toLowerCase().trim());
      }),
    password: yup.string().min(5).max(15).required('Enter your password'),
    email: yup
      .string()
      .email()
      .required('Enter your email')
      .test('email', 'enter another email', (value) => {
        return !usersStore.find((user) => user.email === value);
      }),
  });

  const onSubmit = (values: UserFormType) => {
    dispatch(
      addUser({
        ...values,
        id: Math.random(),
      }),
    );
    form.resetForm({
      values: { ...initialState },
    });
    window.location.href = '/';
  };

  const form = useFormik({
    initialValues: initialState,
    onSubmit,
    validationSchema,
  });

  return (
    <StyledWrapperSignin>
      <StyledInputField>
        <InputField
          onBlur={form.handleBlur('name')}
          error={form.touched.name && !!form.errors.name}
          helperText={form.errors.name}
          label={'enter name'}
          value={form.values.name}
          onChange={form.handleChange('name')}
        />
        <InputField
          name={'login'}
          onBlur={form.handleBlur('login')}
          error={form.touched.login && !!form.errors.login}
          helperText={form.errors.login}
          label={'create login'}
          value={form.values.login}
          onChange={form.handleChange('login')}
        />
        <InputField
          onBlur={form.handleBlur('password')}
          error={form.touched.password && !!form.errors.password}
          helperText={form.errors.password}
          label={'create password'}
          value={form.values.password}
          onChange={form.handleChange('password')}
          type="password"
        />
        <InputField
          name={'email'}
          onBlur={form.handleBlur('email')}
          error={form.touched.email && !!form.errors.email}
          helperText={form.errors.email}
          label={'enter email'}
          value={form.values.email}
          onChange={form.handleChange('email')}
        />
      </StyledInputField>
      <StyledButton variant="contained" onClick={() => form.handleSubmit()}>
        Зарегистрировать
      </StyledButton>
    </StyledWrapperSignin>
  );
};

export default SignIn;
