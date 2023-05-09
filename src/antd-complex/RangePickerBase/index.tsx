import { DatePicker } from 'antd';
import { RangePickerProps } from 'antd/es/date-picker';
import React from 'react';

const { RangePicker } = DatePicker;

export type RangePickerBaseProps = RangePickerProps;

const RangePickerBase = ({ ...props }: RangePickerBaseProps) => (
  <RangePicker {...props} />
);

export default RangePickerBase;
