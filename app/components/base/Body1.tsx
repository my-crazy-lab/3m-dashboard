import React from "react";
import { Text, TextProps } from "react-native";
import { FONTS } from "../../constants";

interface Body1Props extends TextProps {}

const Body1 = ({ children, style, ...props }: Body1Props) => (
  <Text style={{ ...(style as object), ...FONTS.body1 }} {...props}>
    {children}
  </Text>
);

export default Body1;
