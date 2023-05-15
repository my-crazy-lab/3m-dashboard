import { useEffect, useState } from "react";
import useLoading from "../useLoading";

const useGetTotalValueByFilter = () => {
  const [data, setData] = useState([]);

  const { isLoading, onFetchData } = useLoading({
    callbackQuery: (result: any) => {
      setData(result?.data?.data || []);
    },
    method: "get",
    api: `${process.env.REACT_APP_DOMAIN_API}/3m/api/transaction/get-total-value-by-filter`,
  });

  useEffect(() => {
    onFetchData();
  }, []);

  return { data, isLoading };
};
export default useGetTotalValueByFilter;
