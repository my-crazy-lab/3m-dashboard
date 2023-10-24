import React from "react";
import { Text, TextProps } from "react-native";
import { FONTS } from "../../constants";

interface LargeTitleProps extends TextProps {}

const LargeTitle = ({ children, style, ...props }: LargeTitleProps) => (
  <Text style={{ ...(style as object), ...FONTS.largeTitle }} {...props}>
    {children}
  </Text>
);

export default LargeTitle;
