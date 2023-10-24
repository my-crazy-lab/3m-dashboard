import React from "react";
import { Text, TextProps } from "react-native";
import { FONTS } from "../../constants";

interface Body3Props extends TextProps {}

const Body3 = ({ children, style, ...props }: Body3Props) => (
  <Text style={{ ...(style as object), ...FONTS.body3 }} {...props}>
    {children}
  </Text>
);

export default Body3;
