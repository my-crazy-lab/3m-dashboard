import React from "react";
import { Text, TextProps } from "react-native";
import { FONTS } from "../../constants";

interface H1Props extends TextProps {}

const H1 = ({ children, style, ...props }: H1Props) => (
  <Text style={{ ...(style as object), ...FONTS.h1 }} {...props}>
    {children}
  </Text>
);

export default H1;
