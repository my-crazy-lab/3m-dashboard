import React from "react";
import { Text, TextProps } from "react-native";
import { FONTS } from "../../constants";

interface H3Props extends TextProps {
  text: string;
}

const H3 = ({ text, style, ...props }: H3Props) => {
  return (
    <Text style={{ ...(style as object), ...FONTS.h3 }} {...props}>
      {text}
    </Text>
  );
};

export default H3;
