import { TablePaginationConfig } from "antd";
import { useState, useEffect } from "react";
import useLoading from "../useLoading";

const useGetTransactionByPaginationAndFilter = () => {
  const [data, setData] = useState([]);
  const [pagination, setPagination] = useState<TablePaginationConfig>({
    current: 1,
    pageSize: 10,
  });

  const [total, setTotal] = useState<TablePaginationConfig["total"]>(0);

  const { isLoading, onFetchData } = useLoading({
    callbackQuery: ({ data: result }: any) => {
      setData(result.data);
      setTotal(result.total);
    },
    method: "get",
    api: `${process.env.REACT_APP_DOMAIN_API}/3m/api/transaction/get-by-filter-and-pagination`,
  });

  useEffect(() => {
    onFetchData({
      params: {
        pagination: {
          pageNumber: pagination.current,
          pageSize: pagination.pageSize,
        },
      },
    });
  }, []);

  const onPagination = (newPagination: any) => {
    console.log(newPagination);
    setPagination(() => newPagination);

    onFetchData({
      params: {
        pagination: {
          pageNumber: newPagination.current,
          pageSize: newPagination.pageSize,
        },
      },
    });
  };

  return {
    data,
    isLoading,
    pagination,
    total,
    onPagination,
  };
};

export default useGetTransactionByPaginationAndFilter;
