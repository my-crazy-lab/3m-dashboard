import Chart from "react-apexcharts";

const DonutChart = ({
  labels = ["Apple", "Test1", "test2", "test3", "aaaa"],
  series = [44, 55, 41, 17, 15],
}: {
  labels: string[];
  series: number[];
}) => {
  return (
    <Chart
      options={{
        labels,
        dataLabels: {
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
      series={series}
      type="donut"
      width="380"
    />
  );
};

export default DonutChart;
