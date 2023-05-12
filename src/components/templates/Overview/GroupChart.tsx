import React from "react";
import BarChart from "../../atoms/react-chartjs/Bar";
import { faker } from "@faker-js/faker";

const GroupChart = () => {
  const labels = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
  ];

  return (
    <BarChart
      options={{
        indexAxis: "y",
      }}
      data={{
        labels,
        datasets: [
          {
            label: "Dataset 1",
            data: labels.map(() =>
              faker.datatype.number({ min: 0, max: 1000 })
            ),
            backgroundColor: "rgb(255, 99, 132)",
            stack: "Stack 0",
          },
          {
            label: "Dataset 2",
            data: labels.map(() =>
              faker.datatype.number({ min: 0, max: 1000 })
            ),
            backgroundColor: "rgb(75, 192, 192)",
            stack: "Stack 1",
          },
          {
            label: "Dataset 3",
            data: labels.map(() =>
              faker.datatype.number({ min: 0, max: 1000 })
            ),
            backgroundColor: "rgb(53, 162, 235)",
            stack: "Stack 2",
          },
        ],
      }}
    />
  );
};

export default GroupChart;
