import React from "react";
import { Text, TextProps } from "react-native";
import { FONTS } from "../../constants";

interface H2Props extends TextProps {
  text: string;
}

const H2 = ({ text, style, ...props }: H2Props) => (
  <Text style={{ ...(style as object), ...FONTS.h2 }} {...props}>
    {text}
  </Text>
);

export default H2;
