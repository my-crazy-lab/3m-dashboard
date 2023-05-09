import TableBase, { TableBaseProps } from '../TableBase';
import React, { PropsWithChildren } from 'react';
import FilterBasic, { FilterBasicProps } from '../FilterBasic';
import { Row, Col } from 'antd';

export interface TableWithFilterBasicProps<T> {
  filterBasicProps: FilterBasicProps;
  tableProps: TableBaseProps<T>;
  renderMiddleComponent?: () => React.ReactNode;
}

function TableWithFilterBasic<T extends object>({
  filterBasicProps,
  tableProps,
  children,
  renderMiddleComponent,
}: PropsWithChildren<TableWithFilterBasicProps<T>>) {
  return (
    <>
      <Row justify="space-between" style={{ marginBottom: 10 }}>
        <Col span={16}>
          <FilterBasic {...filterBasicProps} />
        </Col>
        <Col>{children}</Col>
      </Row>
      {renderMiddleComponent ? (
        <Row justify="space-between" style={{ marginBottom: 10 }}>
          {renderMiddleComponent()}
        </Row>
      ) : null}
      <TableBase<T> {...tableProps} />
    </>
  );
}

export default TableWithFilterBasic;
