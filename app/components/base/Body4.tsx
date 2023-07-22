import React from "react";
import { Text, TextProps } from "react-native";
import { FONTS } from "../../constants";

interface Body4Props extends TextProps {
  text: string;
}

const Body4 = ({ text, style, ...props }: Body4Props) => (
  <Text style={{ ...(style as object), ...FONTS.body4 }} {...props}>
    {text}
  </Text>
);

export default Body4;
