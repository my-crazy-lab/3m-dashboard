import {
  Typography,
  Tag,
  Input,
  InputNumber,
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
  Row,
} from "antd";
import useGetTransactionByPaginationAndFilter from "../../hooks/useGetTransactionByPaginationAndFilter";
import {
  calculateRevenueForJARS,
  formatCurrency,
  formatDate,
  getKeyJARSByCategory,
} from "../../utils";

import SpaceWrap from "./SpaceWrap";
import TransactionForm from "./TransactionForm";

import type { ColumnsType } from "antd/es/table";
import useDialog from "../../hooks/useDialog";
import useCreateTransaction from "../../hooks/useCreateTransaction";
import { DeleteOutlined, SwapOutlined } from "@ant-design/icons";
import { useContext } from "react";
import { ProductionContext } from "../../components/layout/Main";
import useRemoveTransaction from "../../hooks/useRemoveTransaction";
import SelectTransactionType from "./SelectTransactionType";
import RangePickerTransaction from "./RangePickerTransaction";
import useChangeType from "../../hooks/useChangeType";
import { IN_OUT } from "../../constants";

const TableTransaction = ({ reRenderOutside }: any) => {
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

  const { isLoading: isChanging, onFetchData: onChangeType } = useChangeType();

  const [form] = Form.useForm<any>();

  const columns: ColumnsType<any> = [
    {
      key: "label.date",
      dataIndex: "label.date",
      title: "Date",
      render: (...args) => (
        <Row gutter={[8, 4]}>
          <Col span={24}>
            <Typography.Text>{args[1].username}</Typography.Text>
          </Col>
          <Col span={24}>
            <Typography.Text>{formatDate(args[1].label?.date)}</Typography.Text>
          </Col>
        </Row>
      ),
    },
    {
      key: "type",
      dataIndex: "type",
      title: "In / Out",
      render: (...args) => (
        <Row gutter={[8, 4]}>
          <Col span={24}>
            <Tag color="cyan">{args[1].label.type}</Tag>
            <Tag color="purple">{formatCurrency(args[1].label.value)}</Tag>
          </Col>
          <Col span={24}>
            <Typography.Text>{args[1].label.description}</Typography.Text>
          </Col>
        </Row>
      ),
    },
    {
      key: "action",
      dataIndex: "action",
      title: "Action",
      render: (...args) => (
        <Space>
          <Button
            danger
            onClick={async () => {
              await onRemoveTransaction({
                data: { idTransaction: args[1]._id },
              });
              onRefetch();
            }}
          >
            {isRemoving ? <Spin /> : <DeleteOutlined />}
          </Button>
          <Button
            onClick={async () => {
              await onChangeType({
                data: { idTransaction: args[1]._id, type: "Expenditure" },
              });
              onRefetch();
            }}
          >
            {isChanging ? <Spin /> : <SwapOutlined />}
          </Button>
        </Space>
      ),
    },
  ];

  const onCloseDrawer = () => {
    onClose();
    form.resetFields();
  };

  return (
    <Card bordered={false} className="criclebox h-full">
      <Col>
        <SpaceWrap>
          <Typography.Title level={4}>Transactions Data</Typography.Title>

          <Button onClick={onOpen}>+ Transaction</Button>
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
                    if (e.type === IN_OUT.REVENUE) {
                      await onCreateTransaction({
                        data: {
                          ...e,
                          label: {
                            ...e.label,
                            date: e.label?.date?.toDate(),
                          },
                          jars: calculateRevenueForJARS(e.label.value),
                        },
                      });
                    } else {
                      const jarsKey = getKeyJARSByCategory(e.label.type);

                      if (!jarsKey) {
                        console.error("jarsKey invalid ????");
                      } else {
                        await onCreateTransaction({
                          data: {
                            ...e,
                            label: {
                              ...e.label,
                              date: e.label?.date?.toDate(),
                            },
                            jars: { [jarsKey]: -e.label.value },
                          },
                        });
                      }
                    }

                    form.resetFields();
                    await onRefetch();
                    await reRenderOutside?.({});
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
          placeholder="The maximum amount"
          style={{ width: 200 }}
          formatter={(value) =>
            `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
          }
          parser={(value) => value!.replace(/\$\s?|(,*)/g, "")}
          onChange={(e) => onFilter({ maxValue: e })}
        />
      </SpaceWrap>
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
  );
};

export default TableTransaction;
