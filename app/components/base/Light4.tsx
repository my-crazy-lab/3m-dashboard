import React from "react";
import { Text, TextProps } from "react-native";
import { FONTS } from "../../constants";

const Light4 = ({ children, style, ...props }: TextProps) => (
  <Text style={{ ...(style as object), ...FONTS.light4 }} {...props}>
    {children}
  </Text>
);

export default Light4;
