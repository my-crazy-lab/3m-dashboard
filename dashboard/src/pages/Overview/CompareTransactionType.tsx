import { Card, Col, Descriptions, Row, Skeleton } from "antd";
import DonutChart from "../../components/chart/DonutChart";
import SelectTransactionType from "./SelectTransactionType";
import RangePickerTransaction from "./RangePickerTransaction";
import useGetTotalValueByFilter from "../../hooks/useGetTotalValueByFilter";
import { formatCurrency } from "../../utils";
import { useState } from "react";
import { TRANSACTION_TYPE_EXPENDITURE } from "../../constants";

const CompareTransactionType = () => {
  const { isLoading, data = [], onFilter } = useGetTotalValueByFilter();

  const [labelsDonut, setLabelsDonut] = useState<string[]>([
    TRANSACTION_TYPE_EXPENDITURE.EAT,
  ]);

  return (
    <Card bordered={false} className="criclebox h-full">
      <Row>
        <Col span={8}>
          <Row gutter={[16, 16]}>
            <Col span={24}>
              <SelectTransactionType
                callbackChange={(e: any) => setLabelsDonut(e["label.type"])}
              />
            </Col>
            <Col span={24}>
              <RangePickerTransaction callbackChange={onFilter} />
            </Col>
          </Row>
        </Col>
        <Col span={8}>
          {isLoading ? (
            <Skeleton />
          ) : (
            <Descriptions title="Total">
              {data.length
                ? data.map((item: any) => (
                    <Descriptions.Item key={item._id} label={item._id} span={3}>
                      {formatCurrency(item.total)}
                    </Descriptions.Item>
                  ))
                : null}
            </Descriptions>
          )}
        </Col>
        <Col span={8}>
          <DonutChart
            data={data.filter((item: any) => labelsDonut.includes(item._id))}
          />
        </Col>
      </Row>
    </Card>
  );
};

export default CompareTransactionType;
