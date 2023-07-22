import React from "react";
import { Text, TextProps } from "react-native";
import { FONTS } from "../../constants";

interface H1Props extends TextProps {
  text: string;
}

const H1 = ({ text, style, ...props }: H1Props) => (
  <Text style={{ ...(style as object), ...FONTS.h1 }} {...props}>
    {text}
  </Text>
);

export default H1;
