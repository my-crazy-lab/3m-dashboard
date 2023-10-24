import { Button } from "antd";
import axios from "axios";
import { useState } from "react";

const ButtonSubmitDataToCluster = () => {
  const [isLoading, setIsLoading] = useState(false);
  
  function onReleaseMemoryCluster() {
    setIsLoading(true);

    return axios
      .post(
        `${process.env.REACT_APP_DOMAIN_API}/api/transaction/submit-data-from-local-to-cluster`
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
    <Button loading={isLoading} onClick={onReleaseMemoryCluster}>
      Submit data from local to cluster
    </Button>
  );
};

export default ButtonSubmitDataToCluster;
