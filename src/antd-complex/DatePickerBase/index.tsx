import { DatePicker, DatePickerProps } from 'antd';
import React from 'react';

export type DatePickerBaseProps = DatePickerProps;

const DatePickerBase = ({ ...props }: DatePickerBaseProps) => (
  <DatePicker {...props} />
);

export default DatePickerBase;
