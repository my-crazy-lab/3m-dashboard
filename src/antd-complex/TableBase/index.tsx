import { TableProps, Table } from 'antd';
import { ColumnsType } from 'antd/es/table';
import React from 'react';

export type TColumnsBase<T> = ColumnsType<T>;
export type TableBaseProps<T> = TableProps<T>;

function TableBase<T extends object>({ ...props }: TableBaseProps<T>) {
  return <Table {...props} />;
}

export default TableBase;
