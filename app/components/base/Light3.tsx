import React from "react";
import { Text, TextProps } from "react-native";
import { FONTS } from "../../constants";

const Light3 = ({ children, style, ...props }: TextProps) => (
  <Text style={{ ...(style as object), ...FONTS.light3 }} {...props}>
    {children}
  </Text>
);

export default Light3;
