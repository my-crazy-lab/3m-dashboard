import type { ColumnsType } from 'antd/es/table';
import Table, { TableProps } from 'antd/lib/table';
import React from 'react';

export type TColumnsBase<T> = ColumnsType<T>;
export type TableBaseProps<T> = TableProps<T>;

function TableBase<T extends object>({ ...props }: TableBaseProps<T>) {
  return <Table {...props} />;
}

export default TableBase;
