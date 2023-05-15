import {
  Typography,
  Tag,
  Select,
  Input,
  InputNumber,
  DatePicker,
  Table,
  Button,
  Col,
  Drawer,
  Space,
  Spin,
  Skeleton,
  Form,
  Card,
  Radio,
  Tooltip,
  Checkbox,
} from "antd";
import useGetTransactionByPaginationAndFilter from "../../hooks/useGetTransactionByPaginationAndFilter";
import { formatCurrency, formatDate } from "../../utils";
import { IN_OUT } from "../../constants";

import SpaceWrap from "./SpaceWrap";
import TransactionForm from "./TransactionForm";

import moment from "moment";
import type { ColumnsType } from "antd/es/table";
import useDialog from "../../hooks/useDialog";
import useCreateTransaction from "../../hooks/useCreateTransaction";
import { InfoCircleOutlined } from "@ant-design/icons";
import { useContext } from "react";
import { ProductionContext } from "../../components/layout/Main";
import useRemoveTransaction from "../../hooks/useRemoveTransaction";
import SelectTransactionType from "./SelectTransactionType";
import RangePickerTransaction from "./RangePickerTransaction";

const TableTransaction = () => {
  const { isLoading: isRemoving, onFetchData: onRemoveTransaction } =
    useRemoveTransaction();

  const { isProduction } = useContext<any>(ProductionContext);

  const {
    isLoading,
    data,
    pagination,
    onPagination,
    total,
    onFilter,
    onRefetch,
  } = useGetTransactionByPaginationAndFilter();

  const { open, onClose, onOpen } = useDialog();
  const { isLoading: isCreatingTransaction, onFetchData: onCreateTransaction } =
    useCreateTransaction({ callbackDone: onClose });

  const [form] = Form.useForm<any>();

  const columns: ColumnsType<any> = [
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
    {
      key: "label.description",
      dataIndex: "label.description",
      title: "Description",
      render: (...args) => (
        <Typography.Text>
          {args[1].label?.description
            ? formatCurrency(args[1].label.description)
            : ""}
        </Typography.Text>
      ),
    },
    {
      key: "isProduction",
      dataIndex: "isProduction",
      title: "isProduction",
      render: (isProduction: boolean) => (
        <Checkbox disabled checked={isProduction} />
      ),
    },
    {
      key: "action",
      dataIndex: "action",
      title: "Action",
      render: (...args) => (
        <>
          <Button
            onClick={async () => {
              await onRemoveTransaction({ idTransaction: args[1]._id });

              onRefetch();
            }}
          >
            {isRemoving ? <Spin /> : "Remove"}
          </Button>
        </>
      ),
    },
  ];

  const onCloseDrawer = () => {
    onClose();
    form.resetFields();
  };

  return (
    <>
      <Col>
        <SpaceWrap>
          <Button onClick={onOpen}>Add transaction</Button>
          {
            //@ts-ignore
            <Drawer
              width="50vw"
              visible={open}
              onClose={onCloseDrawer}
              destroyOnClose
              title="Create transaction"
              footer={
                <Space>
                  <Button
                    type="primary"
                    htmlType="submit"
                    onClick={form.submit}
                  >
                    {isCreatingTransaction ? <Spin /> : "Save"}
                  </Button>
                  <Button onClick={onCloseDrawer}>Cancel</Button>
                </Space>
              }
            >
              {isCreatingTransaction ? (
                <Skeleton />
              ) : (
                <TransactionForm
                  form={form}
                  onFinish={async (e: any) => {
                    await onCreateTransaction({
                      ...e,
                      label: { ...e.label, date: e.label?.date?.toDate() },
                      userCode: 3,
                      isProduction,
                    });

                    onRefetch();
                  }}
                />
              )}
            </Drawer>
          }
        </SpaceWrap>
      </Col>
      <SpaceWrap>
        <Input.Search
          style={{ width: 280 }}
          placeholder="Search by description"
          enterButton
          onSearch={(searchValue) =>
            onFilter({ "search.description": searchValue })
          }
        />
        <SelectTransactionType callbackChange={onFilter} />
        <RangePickerTransaction callbackChange={onFilter} />
        <InputNumber
          defaultValue={"5000000".replace(/\$\s?|(,*)/g, "")}
          placeholder="Max value want to search"
          style={{ width: 200 }}
          formatter={(value) =>
            `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
          }
          parser={(value) => value!.replace(/\$\s?|(,*)/g, "")}
          onChange={(e) => onFilter({ maxValue: e })}
        />
      </SpaceWrap>
      <Card
        bordered={false}
        className="criclebox tablespace mb-24"
        title="Transactions Table"
        extra={
          <>
            <Tooltip title="Will be upgrade soon" placement="top">
              <InfoCircleOutlined style={{ margin: "0 8px", fontSize: 18 }} />
            </Tooltip>
            <Radio.Group defaultValue={IN_OUT.EXPENDITURE}>
              <Radio.Button value={IN_OUT.EXPENDITURE}>
                {IN_OUT.EXPENDITURE}
              </Radio.Button>
              <Radio.Button value={IN_OUT.REVENUE}>
                {IN_OUT.REVENUE}
              </Radio.Button>
            </Radio.Group>
          </>
        }
      >
        <div className="table-responsive">
          <Table
            {...{
              pagination: {
                ...pagination,
                total,
                showTotal: (total: any) => (
                  <Tag
                    style={{ fontSize: 16 }}
                    color="green"
                  >{`Total items: ${total}`}</Tag>
                ),
              },
              size: "large",
              loading: isLoading,
              columns,
              dataSource: data || [],
              onChange: onPagination,
              scroll: { x: 800 },
              rowKey: "_id",
            }}
          />
        </div>
      </Card>
    </>
  );
};

export default TableTransaction;
