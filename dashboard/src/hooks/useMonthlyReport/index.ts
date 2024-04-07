import { useContext, useState } from "react";
import useLoading from "../useLoading";
import { ProductionContext } from "../../components/layout/Main";
import moment from "moment";

const useMonthlyReport = () => {
  const { isProduction } = useContext<any>(ProductionContext);

  const [data, setData] = useState<Array<number>>([
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  ]);
  const [filter, setFilter] = useState<{ 'label.type': string; year: number }>({
    year: moment().year(),
    'label.type': "",
  });

  const { isLoading, onFetchData } = useLoading({
    callbackQuery: (dataReturn: any) => {
      if (dataReturn.data?.totalByType?.length) {
        const totalByType = dataReturn.data.totalByType;
        const result = [];
        for (let i = 0; i < 12; i++) {
          if (i < totalByType.length) {
            result.push(totalByType[i].total);
          } else {
            result.push(0);
          }
        }
        setData(result);
      }
    },
    method: "get",
    api: `${process.env.REACT_APP_DOMAIN_API}/api/transaction/report-monthly`,
  });

  const onFilter = (newFilter: any) => {
    setFilter({ ...filter, ...newFilter });
    onFetchData({
      params: { ...filter, ...newFilter, isProduction },
    });
  };

  return { data, isLoading, filter, onFilter };
};
export default useMonthlyReport;
