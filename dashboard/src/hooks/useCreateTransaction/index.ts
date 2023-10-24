import { useState } from "react";
import useLoading from "../useLoading";

const useCreateTransaction = ({ callbackDone }: any) => {
  const [data, setData] = useState([]);

  const { isLoading, onFetchData } = useLoading({
    callbackQuery: ({ data }: any) => {
      setData(data);

      callbackDone?.();
    },
    method: "post",
    api: `${process.env.REACT_APP_DOMAIN_API}/api/transaction/create`,
  });

  return { isLoading, data, onFetchData };
};

export default useCreateTransaction;
