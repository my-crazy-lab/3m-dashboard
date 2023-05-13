import {
  Col,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Radio,
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

const TransactionForm = ({ form }: any) => {
  return (
    <Form
      layout="vertical"
      form={form}
      initialValues={{
        type: "",
        label: { value: 0, type: "", date: "", description: "" },
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
            <Tabs defaultActiveKey={IN_OUT.EXPENDITURE}>
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
            <InputNumber />
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
