import { Card, Col, Row, Space } from "antd";
import DonutChart from "../../components/chart/DonutChart";
import SelectTransactionType from "./SelectTransactionType";
import RangePickerTransaction from "./RangePickerTransaction";

const CompareTransactionType = () => {
  return (
    <Card bordered={false} className="criclebox h-full">
      <Row>
        <Col span={12}>
          <Row gutter={[16, 16]}>
            <Col span={24}>
              <SelectTransactionType
                callbackChange={(e: any) => console.log(e)}
              />
            </Col>
            <Col span={24}>
              <RangePickerTransaction
                callbackChange={(e: any) => console.log(e)}
              />
            </Col>
          </Row>
        </Col>
        <Col span={12}>
          <DonutChart />
        </Col>
      </Row>
    </Card>
  );
};

export default CompareTransactionType;
