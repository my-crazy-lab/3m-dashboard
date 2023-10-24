import React from "react";
import { Text, TextProps } from "react-native";
import { FONTS } from "../../constants";

const Thin2 = ({ children, style, ...props }: TextProps) => (
  <Text style={{ ...(style as object), ...FONTS.thin2 }} {...props}>
    {children}
  </Text>
);

export default Thin2;
