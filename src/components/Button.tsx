import React from "react";
import { Button, type ButtonProps } from "@mui/material";

export interface CustomButtonProps extends ButtonProps {
    onClick: () => void;
}

const CustomButton: React.FC<CustomButtonProps> = ({ children, ...props }) => {
  return (
    <Button
      variant="contained"
      color="primary"
      {...props}
    >
      {children}
    </Button>
  );
};

export default CustomButton;
