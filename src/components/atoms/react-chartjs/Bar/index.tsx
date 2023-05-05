import { Bar, ChartProps } from "react-chartjs-2";
import React from "react";

export interface BarBaseProps extends Omit<ChartProps<"bar">, "type"> {}

const BarBase = ({ ...props }: BarBaseProps) => <Bar {...props} />;

export default BarBase;
