import React from "react";
import { Text, TextProps } from "react-native";
import { FONTS } from "../../constants";

interface H2Props extends TextProps {}

const H2 = ({ children, style, ...props }: H2Props) => (
  <Text style={{ ...(style as object), ...FONTS.h2 }} {...props}>
    {children}
  </Text>
);

export default H2;
