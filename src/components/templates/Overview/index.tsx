import React, { useEffect, useState } from "react";
import BarChart from "../../atoms/react-chartjs/Bar";
import { faker } from "@faker-js/faker";
import axios from "axios";
import Button from "../../atoms/antd/Button";

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

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [data, setData] = useState<any>([]);

  function fetchTransaction() {
    setIsLoading(true);

    return axios
      .get("http://localhost:6600/3m/api/transaction/get-by-type", {
        params: {
          type: "EXPENDITURE",
        },
      })
      .then((result) => {
        setIsLoading(false);
        console.log(result);
        setData(result.data);
      })
      .catch((error: any) => {
        setIsLoading(false);

        console.log(error);
      });
  }

  useEffect(() => {
    fetchTransaction();
  }, []);

  function onReleaseMemoryCluster() {
    setIsLoading(true);

    return axios
      .delete(
        "http://localhost:6600/3m/api/transaction/release-memory-free-cluster"
      )
      .then((result) => {
        setIsLoading(false);

        console.log(result);
      })
      .catch((error: any) => {
        setIsLoading(false);

        console.log(error);
      });
  }

  return (
    <div style={{ width: "800px" }}>
      {isLoading ? "Loading ...." : <>Done !!!</>}
      <Button onClick={onReleaseMemoryCluster}>
        Release memory for Free mongodb cluster
      </Button>
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
    </div>
  );
};

export default Overview;
