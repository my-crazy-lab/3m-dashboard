import React from "react";
import Bar from "../../atoms/react-chartjs/Bar";
import { faker } from "@faker-js/faker";

const Overview = () => {
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
    <div style={{ width: "800px" }}>
      <Bar
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
    </div>
  );
};

export default Overview;
