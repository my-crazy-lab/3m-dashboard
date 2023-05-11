import { Typography, Tag } from "antd";
import React from "react";
import TableBase, { TColumnsBase } from "../../atoms/antd/Table";
import useGetTransactionByPaginationAndFilter from "../../../hooks/useGetTransactionByPaginationAndFilter";

const TableTransaction = () => {
  const columns: TColumnsBase<any> = [
    {
      key: "label.date",
      dataIndex: "label.date",
      title: "Date",
      render: (...args) => <Typography.Text>{args[1].label.date}</Typography.Text>,
    },
    {
      key: "type",
      dataIndex: "type",
      title: "In / Out",
      render: (type) => (
        <Typography.Text>{type}</Typography.Text>
      ),
    },
    {
      key: "label.type",
      dataIndex: "label.type",
      title: "Type transaction",
      render: (...args) => (
        <Typography.Text>{args[1].label.type}</Typography.Text>
      ),
    },
    {
      key: "label.value",
      dataIndex: "label.value",
      title: "Value",
      render: (...args) => (
        <Typography.Text>{args[1].label.value}</Typography.Text>
      ),
    },
  ];

  const { isLoading, data, pagination, onPagination, total } =
    useGetTransactionByPaginationAndFilter();

  return (
    <TableBase
      {...{
        pagination: {
          ...pagination,
          total,
          showTotal: (total) => (
            <Tag color="green">{`TOTAL_RECORDS ${total}`}</Tag>
          ),
        },
        size: "large",
        loading: isLoading,
        columns,
        dataSource: data,
        onChange: onPagination,
        scroll: { x: 800 },
        rowKey: "_id",
      }}
    />
  );
};

export default TableTransaction;
