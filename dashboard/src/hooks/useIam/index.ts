import { useState } from "react";
import useLoading from "../useLoading";
import { useHistory } from "react-router-dom";

const useIam = () => {
  const [data, setData] = useState();
  const history = useHistory();

  const { isLoading, onFetchData } = useLoading({
    callbackQuery: ({ data }: any) => {
      setData(data);
      console.log(data)
    },
    callbackError: () => {
      history.push("/sign-in");
    },
    method: "get",
    api: `${process.env.REACT_APP_DOMAIN_API}/api/3m/iam`,
  });

  return { isLoading, data, onFetchData };
};

export default useIam;
