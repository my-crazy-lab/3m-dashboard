import React from "react";
import { Text, TextProps } from "react-native";
import { FONTS } from "../../constants";

interface Body4Props extends TextProps {}

const Body4 = ({ children, style, ...props }: Body4Props) => (
  <Text style={{ ...(style as object), ...FONTS.body4 }} {...props}>
    {children}
  </Text>
);

export default Body4;
