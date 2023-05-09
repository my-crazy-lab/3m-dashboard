import { TablePaginationConfig } from "antd";
import { useState, useEffect } from "react";
import useLoading from "../useLoading";

interface IFilter {
  [key: string]: string;
}

const useGetTransactionByPaginationAndFilter = () => {
  const [data, setData] = useState([]);
  const [pagination, setPagination] = useState<TablePaginationConfig>({
    current: 1,
    pageSize: 10,
  });

  const [total, setTotal] = useState<TablePaginationConfig["total"]>(0);

  const [filter, setFilter] = useState<IFilter & { rangeDate: [Date, Date] }>({
    rangeDate: [new Date(), new Date()],
  });

  const { isLoading, onFetchData } = useLoading({
    callbackQuery: (result: any) => {
      setData(result.data);
      setTotal(result.total);
    },
  });

  useEffect(() => {
    onFetchData({
      pagination: {
        pageNumber: pagination.current,
        pageSize: pagination.pageSize,
      },
      filter,
    });
  }, []);

  const onPagination = (newPagination: any) => {
    setPagination(() => newPagination);

    onFetchData({
      pagination: {
        pageNumber: newPagination.current,
        pageSize: newPagination.pageSize,
      },
      filter,
    });
  };

  const onFilter = (updateFilter: IFilter) => {
    setFilter((currentFilter) => ({ ...currentFilter, ...updateFilter }));
    setPagination(() => ({ current: 1, pageSize: 10 }));

    onFetchData({
      pagination: {
        pageNumber: pagination.current,
        pageSize: pagination.pageSize,
      },
      filter: { ...filter, ...updateFilter },
    });
  };

  return {
    data,
    isLoading,
    onFilter,
    pagination,
    onPagination,
    total,
  };
};

export default useGetTransactionByPaginationAndFilter;
