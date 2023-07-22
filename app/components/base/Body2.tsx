import React from "react";
import { Text, TextProps } from "react-native";
import { FONTS } from "../../constants";

interface Body2Props extends TextProps {
  text: string;
}

const Body2 = ({ text, style, ...props }: Body2Props) => (
  <Text style={{ ...(style as object), ...FONTS.body2 }} {...props}>
    {text}
  </Text>
);

export default Body2;
