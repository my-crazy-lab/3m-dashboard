import { useEffect, useState } from "react";
import useLoading from "../useLoading";
import moment from "moment";

const useGetTotalValueByFilter = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState({
    rangeDate: [
      moment().startOf("date").toDate(),
      moment().endOf("date").toDate(),
    ],
  });

  const { isLoading, onFetchData } = useLoading({
    callbackQuery: (result: any) => {
      setData(result?.data?.data || []);
    },
    method: "get",
    api: `${process.env.REACT_APP_DOMAIN_API}/3m/api/transaction/get-total-value-by-filter`,
  });

  useEffect(() => {
    onFetchData({ params: { filter } });
  }, []);

  const onFilter = (newFilter: any) => {
    setFilter({ ...filter, ...newFilter });
    onFetchData({ params: { filter: { ...filter, ...newFilter } } });
  };

  return { data, isLoading, filter, onFilter, onFetchData };
};
export default useGetTotalValueByFilter;
