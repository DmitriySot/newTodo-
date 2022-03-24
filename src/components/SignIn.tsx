import React from 'react';
import InputField from 'components/InputField';
import { Button, styled } from '@mui/material';
import * as yup from 'yup';
import { useFormik } from 'formik';
import { InitialUserValues, useAuth } from 'hooks/useUsers';

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

const initialValues: InitialUserValues = {
  login: '',
  password: '',
};

const validationSchema = yup.object().shape({
  login: yup.string().min(5).max(15).required('Enter login'),
  password: yup.string().min(5).max(15).required('Enter password'),
});

const SignIn = () => {
  const onSubmit = useAuth();

  const form = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  });

  return (
    <StyledWrapperSignin>
      <StyledInputField>
        <InputField
          helperText={form.errors.login}
          onBlur={form.handleBlur('login')}
          error={!!form.errors.login && form.touched.login}
          label={'login'}
          value={form.values.login}
          onChange={form.handleChange('login')}
        />
        <InputField
          helperText={form.errors.password}
          onBlur={form.handleBlur('password')}
          error={!!form.errors.password && form.touched.password}
          label={'password'}
          type="password"
          value={form.values.password}
          onChange={form.handleChange('password')}
        />
      </StyledInputField>
      <StyledButton variant="contained" onClick={() => form.handleSubmit()}>
        Войти
      </StyledButton>
    </StyledWrapperSignin>
  );
};

export default SignIn;
