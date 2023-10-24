import React from "react";
import useFetchData from "./useFetchData";
import { Transactions } from "../types/transactions";

const useGetTransactions = () => {
const [data, setData] = React.useState<Transactions[]>([]);
  const [error, setError] = React.useState();

  const { isLoading, fetchData } = useFetchData({
    url: "transaction/get-for-app",
  });

  const fetching = () => {
    return fetchData({
      restHttp: {
        method: "GET",
      },
      callbackSuccess: setData,
      callbackError: setError,
      // params: new URLSearchParams([["isProduction", "false"]]),
    });
  };

  return { fetchData: fetching, data, error, isLoading };
};

export default useGetTransactions;
