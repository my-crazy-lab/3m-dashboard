import { TablePaginationConfig } from "antd";
import { useState, useEffect } from "react";
import useLoading from "../useLoading";
import { TRANSACTION_TYPE_EXPENDITURE } from "../../constants";

const useGetTransactionByPaginationAndFilter = () => {
  const [data, setData] = useState([]);
  const [pagination, setPagination] = useState<TablePaginationConfig>({
    current: 1,
    pageSize: 10,
  });

  const [total, setTotal] = useState<TablePaginationConfig["total"]>(0);
  const [filter, setFilter] = useState<{ [key: string]: string | Array<any> }>({
    "label.type": [TRANSACTION_TYPE_EXPENDITURE.EAT],
  });

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
        filter,
      },
    });
  }, []);

  const onPagination = async (newPagination: any) => {
    console.log(newPagination);
    setPagination(() => newPagination);

    await onFetchData({
      params: {
        pagination: {
          pageNumber: newPagination.current,
          pageSize: newPagination.pageSize,
        },
        filter,
      },
    });
  };

  const onFilter = async (newFilter) => {
    setFilter({ ...filter, ...newFilter });

    await onFetchData({
      params: {
        pagination: {
          pageNumber: 1,
          pageSize: 10,
        },
        filter: { ...filter, ...newFilter },
      },
    });
  };

  return {
    data,
    isLoading,
    pagination,
    total,
    filter,
    onFilter,
    onPagination,
  };
};

export default useGetTransactionByPaginationAndFilter;
