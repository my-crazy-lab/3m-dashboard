import React from "react";
import { Text, TextProps } from "react-native";
import { FONTS } from "../../constants";

interface Body3Props extends TextProps {
  text: string;
}

const Body3 = ({ text, style, ...props }: Body3Props) => (
  <Text style={{ ...(style as object), ...FONTS.body3 }} {...props}>
    {text}
  </Text>
);

export default Body3;
