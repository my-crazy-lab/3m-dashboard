import { TablePaginationConfig } from "antd";
import { useState, useEffect, useContext } from "react";
import useLoading from "../useLoading";
import { ProductionContext } from "../../components/layout/Main";
import moment from "moment";

const useGetTransactionByPaginationAndFilter = () => {
  const { isProduction } = useContext<any>(ProductionContext);

  const [data, setData] = useState([]);
  const [pagination, setPagination] = useState<TablePaginationConfig>({
    current: 1,
    pageSize: 10,
  });

  const [total, setTotal] = useState<TablePaginationConfig["total"]>(0);
  const [filter, setFilter] = useState<{
    [key: string]: string | Array<any> | number;
  }>({
    "label.type": [],
    maxValue: 5000000,
    rangeDate: [
      moment().startOf("month").toDate(),
      moment().endOf("date").toDate(),
    ],
    isProduction: isProduction,
  });

  const { isLoading, onFetchData } = useLoading({
    callbackQuery: ({ data: result }: any) => {
      setData(result.data);
      setTotal(result.total);
    },
    method: "get",
    api: `${process.env.REACT_APP_DOMAIN_API}/api/transaction/get-by-filter-and-pagination`,
  });

  useEffect(() => {
    onFetchData({
      params: {
        pagination: {
          pageNumber: pagination.current,
          pageSize: pagination.pageSize,
        },
        filter: { ...filter, isProduction },
      },
    });
  }, []);

  const onPagination = async (newPagination: any) => {
    setPagination(() => newPagination);

    await onFetchData({
      params: {
        pagination: {
          pageNumber: newPagination.current,
          pageSize: newPagination.pageSize,
        },
        filter: { ...filter, isProduction },
      },
    });
  };

  const onFilter = async (newFilter: any) => {
    setFilter({ ...filter, ...newFilter, isProduction });

    await onFetchData({
      params: {
        pagination: {
          pageNumber: 1,
          pageSize: 10,
        },
        filter: { ...filter, ...newFilter, isProduction },
      },
    });
  };

  const onRefetch = async () => {
    await onFetchData({
      params: {
        pagination: {
          pageNumber: pagination.current,
          pageSize: pagination.pageSize,
        },
        filter: { ...filter, isProduction },
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
    onRefetch,
  };
};

export default useGetTransactionByPaginationAndFilter;
