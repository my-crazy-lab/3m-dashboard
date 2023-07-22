import React from "react";
import { Text, TextProps } from "react-native";
import { FONTS } from "../../constants";

interface H3Props extends TextProps {}

const H3 = ({ children, style, ...props }: H3Props) => {
  return (
    <Text style={{ ...(style as object), ...FONTS.h3 }} {...props}>
      {children}
    </Text>
  );
};

export default H3;
