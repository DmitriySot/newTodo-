import { FormControl, styled, TextField, TextFieldProps } from '@mui/material';
import React from 'react';

type Props = TextFieldProps & {};

const StyledInput = styled(TextField)`
  width: 100%;
  box-sizing: border-box;
  margin-top: 20px;
`;

const InputField: React.FC<Props> = ({ ...rest }) => {
  return (
    <FormControl fullWidth>
      <StyledInput {...rest} />
    </FormControl>
  );
};

export default InputField;
