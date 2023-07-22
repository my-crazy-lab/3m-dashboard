import React from "react";
import { Text, TextProps } from "react-native";
import { FONTS } from "../../constants";

interface Body2Props extends TextProps {}

const Body2 = ({ children, style, ...props }: Body2Props) => (
  <Text style={{ ...(style as object), ...FONTS.body2 }} {...props}>
    {children}
  </Text>
);

export default Body2;
