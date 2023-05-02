import React from "react";
import { Button as ButtonAntd, ButtonProps } from "antd";

const Button = ({ children, ...props }: ButtonProps) => {
  return <ButtonAntd {...props}>{children}</ButtonAntd>;
};

export default Button;
