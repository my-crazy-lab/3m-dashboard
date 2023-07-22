import React from "react";
import { Text, TextProps } from "react-native";
import { FONTS } from "../../constants";

interface LargeTitleProps extends TextProps {
  text: string;
}

const LargeTitle = ({ text, style, ...props }: LargeTitleProps) => (
  <Text style={{ ...(style as object), ...FONTS.largeTitle }} {...props}>
    {text}
  </Text>
);

export default LargeTitle;
