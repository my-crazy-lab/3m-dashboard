import {
  Typography,
  Tag,
  Select,
  Input,
  Slider,
  Col,
  InputNumber,
  Row,
} from "antd";
import React, { useState } from "react";
import TableBase, { TColumnsBase } from "../../atoms/antd/Table";
import useGetTransactionByPaginationAndFilter from "../../../hooks/useGetTransactionByPaginationAndFilter";
import { formatCurrency, formatDate } from "../../../utils";
import {
  IN_OUT,
  TRANSACTION_TYPE_EXPENDITURE,
  TransactionTypeExpenditureData,
  TransactionTypeRevenue,
} from "../../../constants";
import SpaceWrap from "../../atoms/antd/SpaceWrap";

const TableTransaction = () => {
  const columns: TColumnsBase<any> = [
    {
      key: "label.date",
      dataIndex: "label.date",
      title: "Date",
      render: (...args) => (
        <Typography.Text>{formatDate(args[1].label?.date)}</Typography.Text>
      ),
    },
    {
      key: "type",
      dataIndex: "type",
      title: "In / Out",
      render: (type) => <Typography.Text>{type}</Typography.Text>,
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
        <Typography.Text>{formatCurrency(args[1].label.value)}</Typography.Text>
      ),
    },
  ];

  const { isLoading, data, pagination, onPagination, total, onFilter } =
    useGetTransactionByPaginationAndFilter();

  return (
    <>
      <SpaceWrap>
        <Input.Search
          style={{ width: 280 }}
          placeholder="Search text"
          enterButton
        />
        <Select
          onChange={(e) => {
            console.log(e, "!!!");
            //@ts-ignore
            if (e.includes(IN_OUT.EXPENDITURE)) {
              onFilter({ type: IN_OUT.EXPENDITURE, "label.type": undefined });
            }
            //@ts-ignore
            else if (e.includes(IN_OUT.REVENUE)) {
              onFilter({ type: IN_OUT.REVENUE, "label.type": undefined });
            } else onFilter({ "label.type": e, type: undefined });
          }}
          mode="multiple"
          defaultValue={[TRANSACTION_TYPE_EXPENDITURE.EAT]}
          style={{ width: 280 }}
          options={[
            {
              label: IN_OUT.EXPENDITURE,
              options: [
                ...TransactionTypeExpenditureData,
                IN_OUT.EXPENDITURE,
              ].map((item) => ({
                label: item,
                value: item,
              })),
            },
            {
              label: IN_OUT.REVENUE,
              options: [...TransactionTypeRevenue, IN_OUT.REVENUE].map(
                (item) => ({
                  label: item,
                  value: item,
                })
              ),
            },
          ]}
        />
        <InputNumber
          placeholder="Max value want to search"
          style={{ width: 200 }}
          formatter={(value) =>
            `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
          }
          parser={(value) => value!.replace(/\$\s?|(,*)/g, "")}
          onChange={(e) => onFilter({ maxValue: e })}
        />
      </SpaceWrap>
      <TableBase
        size="large"
        {...{
          pagination: {
            ...pagination,
            total,
            showTotal: (total) => (
              <Tag
                style={{ fontSize: 16 }}
                color="green"
              >{`Total items: ${total}`}</Tag>
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
    </>
  );
};

export default TableTransaction;
