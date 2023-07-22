import React from "react";
import { Text, TextProps } from "react-native";
import { FONTS } from "../../constants";

interface H4Props extends TextProps {
  text: string;
}

const H4 = ({ text, style, ...props }: H4Props) => {
  return (
    <Text style={{ ...(style as object), ...FONTS.h4 }} {...props}>
      {text}
    </Text>
  );
};

export default H4;
