import { Card, Col, Descriptions, Divider, Row, Skeleton } from "antd";
import DonutChart from "../../components/chart/DonutChart";
import SelectTransactionType from "./SelectTransactionType";
import RangePickerTransaction from "./RangePickerTransaction";
import useGetTotalValueByFilter from "../../hooks/useGetTotalValueByFilter";
import { formatCurrency } from "../../utils";
import { useState } from "react";
import { TRANSACTION_TYPE_EXPENDITURE } from "../../constants";

const CompareTransactionType = () => {
  const { isLoading, data, onFilter } = useGetTotalValueByFilter();

  const [labelsDonut, setLabelsDonut] = useState<string[]>([
    TRANSACTION_TYPE_EXPENDITURE.EAT,
  ]);

  const [labelsDonutRevenue, setLabelsDonutRevenue] = useState<string[]>([
    TRANSACTION_TYPE_EXPENDITURE.EAT,
  ]);

  return (
    <Row gutter={[8, 32]}>
      <Col span={24}>
        <Card bordered={false} className="criclebox h-full">
          <Row wrap>
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
                <Descriptions title="Total expenditure">
                  {data.expenditure.length
                    ? data.expenditure.map((item: any) => (
                        <Descriptions.Item
                          key={item._id}
                          label={item._id}
                          span={3}
                        >
                          {formatCurrency(item.total)}
                        </Descriptions.Item>
                      ))
                    : null}
                  <Descriptions.Item label="" span={3}>
                    <Divider />
                  </Descriptions.Item>
                  <Descriptions.Item label="Sum" span={3}>
                    {formatCurrency(
                      data.expenditure.reduce(
                        (accumulator, currentValue: any) =>
                          accumulator + currentValue.total,
                        0
                      )
                    )}
                  </Descriptions.Item>
                </Descriptions>
              )}
            </Col>
            <Col span={8}>
              <DonutChart
                data={data.expenditure?.filter((item: any) =>
                  labelsDonut.includes(item._id)
                )}
              />
            </Col>
          </Row>
        </Card>
      </Col>
      <Col span={24}>
        <Card bordered={false} className="criclebox h-full">
          <Row wrap>
            <Col span={8}>
              <Row gutter={[16, 16]}>
                <Col span={24}>
                  <SelectTransactionType
                    callbackChange={(e: any) =>
                      setLabelsDonutRevenue(e["label.type"])
                    }
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
                <Descriptions title="Total revenue">
                  {data.revenue.length
                    ? data.revenue.map((item: any) => (
                        <Descriptions.Item
                          key={item._id}
                          label={item._id}
                          span={3}
                        >
                          {formatCurrency(item.total)}
                        </Descriptions.Item>
                      ))
                    : null}
                  <Descriptions.Item label="" span={3}>
                    <Divider />
                  </Descriptions.Item>
                  <Descriptions.Item label="Sum" span={3}>
                    {formatCurrency(
                      data.revenue.reduce(
                        (accumulator, currentValue: any) =>
                          accumulator + currentValue.total,
                        0
                      )
                    )}
                  </Descriptions.Item>
                </Descriptions>
              )}
            </Col>
            <Col span={8}>
              <DonutChart
                data={data.revenue?.filter((item: any) =>
                  labelsDonutRevenue.includes(item._id)
                )}
              />
            </Col>
          </Row>
        </Card>
      </Col>
    </Row>
  );
};

export default CompareTransactionType;
