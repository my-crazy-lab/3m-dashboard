import { Typography, Tag } from "antd";
import React, { useState } from "react";
import TableWithFilterBasic from "../../../antd-complex/TableWithFilterBasic";
import useDialog from "../../../hooks/useDialog";
import { TColumnsBase } from "../../atoms/antd/Table";
import useGetTransactionByPaginationAndFilter from "../../../hooks/useGetTransactionByPaginationAndFilter";

const TableTransaction = () => {
  const columns: TColumnsBase<any> = 
     [
      {
        key: '_id',
        dataIndex: 'key',
        title: 'ORDER',
        width: 100,
        render: (...args) => <Typography.Text>{args[2] + 1}</Typography.Text>,
      },
      {
        key: 'user.phone',
        dataIndex: 'user.phone',
        title: 'PHONE',
        render: (...args) => (
          <Typography.Text>{args[1].user.phone}</Typography.Text>
        ),
      },
      {
        key: 'user.username',
        dataIndex: 'user.username',
        title:'USERNAME',
        render: (...args) => (
          <Typography.Text>{args[1].user.username}</Typography.Text>
        ),
      },
    ]


  const { open, onOpen, onClose } = useDialog(false);
  const [toDate, setToDate] = useState<Date | undefined>(undefined);

  const {
    isLoading,
    onFilter,
    data,
    pagination,
    onPagination,
    total,
  } = useGetTransactionByPaginationAndFilter()

  return (
    <>
      <TableWithFilterBasic
        filterBasicProps={{
          search: {
            isDisplay: true,
            props: {
              defaultValue: 'phone',
              onSearch: (value: string, option: string) => {
                onFilter({
                  [`user.${option}`]: value,
                });
              },
              selectProps: {
                options: [
                  {
                    label: 'PHONE',
                    value: 'phone',
                  },
                  { label: 'USERNAME', value: 'username' },
                ],
              },
              searchProps: { placeholder: 'Fill something' },
            },
          },
          date: {
            isDisplay: true,
            props: {
              defaultSelected: 'date',
              onChange: ({ rangeDate }) => {
                onFilter({ rangeDate });

                if (!rangeDate) {
                  setToDate(undefined);
                } else {
                  setToDate(rangeDate[1]);
                }
              },
            },
          },
        }}
        tableProps={{
          pagination: {
            ...pagination,
            total,
            showTotal: (total) => (
              <Tag color="green">{`TOTAL_RECORDS ${total}`}</Tag>
            ),
          },
          size: 'large',
          loading: isLoading,
          columns,
          dataSource: data,
          onChange: onPagination,
          scroll: { x: 800 },
          rowKey: '_id',
          onRow: (record) => ({
            onDoubleClick: () => {
              onOpen();

              // fetch({ userId: record._id, toDate });
            },
          }),
        }}
      />
    </>
  );
};

export default TableTransaction;
