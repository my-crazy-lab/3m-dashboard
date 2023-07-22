import React from "react";
import { Text, TextProps } from "react-native";
import { FONTS } from "../../constants";

interface Body1Props extends TextProps {
  text: string;
}

const Body1 = ({ text, style, ...props }: Body1Props) => (
  <Text style={{ ...(style as object), ...FONTS.body1 }} {...props}>
    {text}
  </Text>
);

export default Body1;
