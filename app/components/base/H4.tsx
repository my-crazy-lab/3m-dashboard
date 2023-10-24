import React from "react";
import { Text, TextProps } from "react-native";
import { FONTS } from "../../constants";

interface H4Props extends TextProps {}

const H4 = ({ children, style, ...props }: H4Props) => {
  return (
    <Text style={{ ...(style as object), ...FONTS.h4 }} {...props}>
      {children}
    </Text>
  );
};

export default H4;
