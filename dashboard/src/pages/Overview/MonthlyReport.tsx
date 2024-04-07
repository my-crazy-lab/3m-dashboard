import ReactApexChart from "react-apexcharts";
import useMonthlyReport from "../../hooks/useMonthlyReport";
import { Row, Col, DatePicker, Card } from "antd";
import SelectTransactionType from "./SelectTransactionType";
import moment from "moment";
import { formatCurrency } from "../../utils";

function MonthlyReport() {
  const { data, onFilter, filter } = useMonthlyReport();

  return (
    <Card bordered={false} className="criclebox h-full">
      <Row gutter={[16, 16]}>
        <Col xs={12}>
          <DatePicker
            defaultValue={moment()}
            onChange={(e) => {
              onFilter({ year: e?.year() });
            }}
            picker="year"
          />
        </Col>
        <Col xs={12}>
          <SelectTransactionType modeSingle callbackChange={onFilter} />
        </Col>
        <Col xs={24}>
          <ReactApexChart
            className="bar-chart"
            options={{
              chart: {
                type: "bar",
                width: "100%",
                height: "auto",

                toolbar: {
                  show: false,
                },
              },
              plotOptions: {
                bar: {
                  horizontal: false,
                  columnWidth: "80%",
                  borderRadius: 5,
                },
              },
              dataLabels: {
                enabled: false,
              },
              stroke: {
                show: true,
                width: 1,
                colors: ["transparent"],
              },
              grid: {
                show: true,
                borderColor: "#ccc",
                strokeDashArray: 2,
              },
              xaxis: {
                categories: [
                  "Jan",
                  "Feb",
                  "Mar",
                  "Apr",
                  "May",
                  "Jun",
                  "Jul",
                  "Aug",
                  "Sep",
                  "Oct",
                  "Nov",
                  "Dec",
                ],
                labels: {
                  show: true,
                  style: {
                    colors: [
                      "#fff",
                      "#fff",
                      "#fff",
                      "#fff",
                      "#fff",
                      "#fff",
                      "#fff",
                      "#fff",
                      "#fff",
                      "#fff",
                      "#fff",
                      "#fff",
                      "#fff",
                    ],
                  },
                },
              },
              yaxis: {
                labels: {
                  formatter: (val) => formatCurrency(val),
                  show: true,
                  align: "right",
                  minWidth: 0,
                  maxWidth: 160,
                  style: {
                    colors: [
                      "#fff",
                      "#fff",
                      "#fff",
                      "#fff",
                      "#fff",
                      "#fff",
                      "#fff",
                      "#fff",
                      "#fff",
                      "#fff",
                      "#fff",
                      "#fff",
                      "#fff",
                    ],
                  },
                },
              },

              tooltip: {
                y: {
                  formatter: function (val) {
                    return formatCurrency(val);
                  },
                },
              },
            }}
            series={[
              {
                name: filter["label.type"],
                data,
                color: "#fff",
              },
            ]}
            type="bar"
            height={400}
          />
        </Col>
      </Row>
    </Card>
  );
}

export default MonthlyReport;
