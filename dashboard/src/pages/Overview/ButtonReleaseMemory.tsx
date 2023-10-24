import { Button } from "antd";
import axios from "axios";

const ButtonReleaseMemory = ({ setIsLoading }: any) => {
  function onReleaseMemoryCluster() {
    setIsLoading(true);

    return axios
      .delete(
        `${process.env.REACT_APP_DOMAIN_API}/api/transaction/release-memory-free-cluster`
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
    <Button onClick={onReleaseMemoryCluster}>
      Release memory for Free mongodb cluster
    </Button>
  );
};

export default ButtonReleaseMemory;
