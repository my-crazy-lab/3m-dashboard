import { useState } from "react";
import useLoading from "../useLoading";

const useChangeType = () => {
  const [data, setData] = useState([]);

  const { isLoading, onFetchData } = useLoading({
    callbackQuery: ({ data }: any) => {
      setData(data);
    },
    method: "post",
    api: `${process.env.REACT_APP_DOMAIN_API}/api/transaction/change-type`,
  });

  return { isLoading, data, onFetchData };
};

export default useChangeType;
