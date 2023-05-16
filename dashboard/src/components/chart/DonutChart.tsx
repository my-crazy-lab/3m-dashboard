import Chart from "react-apexcharts";
import { formatCurrency } from "../../utils";

const DonutChart = ({ data = [] }: { data: Array<any> }) => {
  return (
    <Chart
      options={{
        labels: data.map((item) => item._id) || [],
        dataLabels: {
          formatter: (value: any, op) => {
            console.log(value, op);
            return op.w.config.series.map((item: any) => formatCurrency(item))[
              op.seriesIndex
            ];
          },
          enabled: true,
          enabledOnSeries: undefined,
          textAnchor: "middle",
          distributed: false,
          offsetX: 0,
          offsetY: 0,
          style: {
            fontSize: "14px",
            fontFamily: "Helvetica, Arial, sans-serif",
            fontWeight: "bold",
            colors: undefined,
          },
          background: {
            enabled: true,
            foreColor: "#fff",
            padding: 4,
            borderRadius: 2,
            borderWidth: 1,
            borderColor: "#fff",
            opacity: 0.9,
            dropShadow: {
              enabled: false,
              top: 1,
              left: 1,
              blur: 1,
              color: "# ",
              opacity: 0.45,
            },
          },
          dropShadow: {
            enabled: false,
            top: 1,
            left: 1,
            blur: 1,
            color: "# ",
            opacity: 0.45,
          },
        },
      }}
      series={data.map((item) => item.total) || []}
      type="donut"
      width="380"
    />
  );
};

export default DonutChart;
