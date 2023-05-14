import Chart from "react-apexcharts";

const DonutChart = () => {
  return (
    <div className="donut">
      <Chart series={[44, 55, 41, 17, 15]} type="donut" width="380" />
    </div>
  );
};

export default DonutChart;
