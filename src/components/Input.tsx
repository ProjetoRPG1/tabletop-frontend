import React from "react";
import TextField, { type TextFieldProps } from '@mui/material/TextField';

interface CustomInputProps extends TextFieldProps<"outlined"> {
    label: string;
    helperText?: string;
    title?: string;
}

const CustomInput: React.FC<CustomInputProps> = ({ ...props }) => {
  return (
    <TextField
      fullWidth
      {...props}
    />
  );
};

export default CustomInput;
