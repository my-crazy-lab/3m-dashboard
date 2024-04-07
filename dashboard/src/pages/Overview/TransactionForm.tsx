import {
  Col,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Row,
  Select,
  Tabs,
} from "antd";
import {
  IN_OUT,
  InOutDate,
  TransactionTypeExpenditureData,
  TransactionTypeRevenue,
} from "../../constants";
import moment from "moment";

const TransactionForm = ({ form, onFinish }: any) => {
  return (
    <Form
      onFinish={onFinish}
      layout="vertical"
      form={form}
      initialValues={{
        type: IN_OUT.EXPENDITURE,
        label: {
          value: 0,
          type: "",
          date: moment(),
          description: "",
        },
      }}
    >
      <Row gutter={16}>
        <Col span={12}>
          <Form.Item
            name="type"
            label="Type of transaction"
            rules={[
              { required: true, message: "Please select transaction's type" },
            ]}
          >
            <Tabs>
              {InOutDate.map((item) => (
                <Tabs.TabPane tab={item} key={item}>
                  {item === IN_OUT.EXPENDITURE ? (
                    <Form.Item name={["label", "type"]} label="Expenditure">
                      <Select
                        placeholder="Please choose the type"
                        options={TransactionTypeExpenditureData.map((item) => ({
                          value: item,
                          label: item,
                        }))}
                      ></Select>
                    </Form.Item>
                  ) : null}
                  {item === IN_OUT.REVENUE ? (
                    <Form.Item name={["label", "type"]} label="Revenue">
                      <Select
                        placeholder="Please choose the type"
                        options={TransactionTypeRevenue.map((item) => ({
                          value: item,
                          label: item,
                        }))}
                      ></Select>
                    </Form.Item>
                  ) : null}
                </Tabs.TabPane>
              ))}
            </Tabs>
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item name={["label", "description"]} label="Description">
            <Input.TextArea
              rows={6}
              placeholder="Enter transaction's description"
            />
          </Form.Item>
        </Col>
      </Row>
      <Row gutter={16}>
        <Col span={12}>
          <Form.Item
            name={["label", "value"]}
            label="Value (VND)"
            rules={[
              { required: true, message: "Please input transaction's value" },
            ]}
          >
            <InputNumber
              placeholder="Max value want to search"
              style={{ width: 200 }}
              formatter={(value) =>
                `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
              }
              parser={(value) => value!.replace(/\$\s?|(,*)/g, "")}
            />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item
            name={["label", "date"]}
            label="Date"
            rules={[
              {
                required: true,
                message: "Please choose the transaction's date",
              },
            ]}
          >
            <DatePicker picker="date" style={{ width: "100%" }} />
          </Form.Item>
        </Col>
      </Row>
    </Form>
  );
};

export default TransactionForm;
