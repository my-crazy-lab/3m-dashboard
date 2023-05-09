import Select, { DefaultOptionType, SelectProps } from 'antd/lib/select';
import React from 'react';

export type SelectBaseProps<T = any> = SelectProps<T>;

export type ISectionOption = DefaultOptionType;

function SelectBase<T = any>({ ...props }: SelectBaseProps<T>) {
  return <Select<T> {...props} />;
}

export default SelectBase;
