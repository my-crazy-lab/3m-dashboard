import React, { useState } from "react";
import axios from "axios";
import Button from "../../atoms/antd/Button";
import TableTransaction from "./TableTransaction";
import { Skeleton } from "antd";
import SpaceWrap from "../../atoms/antd/SpaceWrap";
import GroupChart from "./GroupChart";

const Overview = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  function resetUser() {
    return axios
      .post(`${process.env.REACT_APP_DOMAIN_API}/3m/api/user/reset`)
      .then((msg) => {
        console.log(msg);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function onReleaseMemoryCluster() {
    setIsLoading(true);

    return axios
      .delete(
        `${process.env.REACT_APP_DOMAIN_API}/3m/api/transaction/release-memory-free-cluster`
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
    <div style={{ width: 1200 }}>
      {isLoading ? <Skeleton /> : null}
      <SpaceWrap>
        <Button onClick={onReleaseMemoryCluster}>
          Release memory for Free mongodb cluster
        </Button>
        <Button onClick={resetUser}>Reset user</Button>
      </SpaceWrap>
      <GroupChart />
      <TableTransaction />
    </div>
  );
};

export default Overview;
