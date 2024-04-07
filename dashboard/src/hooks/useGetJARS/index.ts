import { useEffect, useState } from "react";
import useLoading from "../useLoading";
import { sixJARS } from "../../constants";

const useGetJARS = () => {
  const [data, setData] = useState(
    sixJARS.map((jar) => ({
      key: jar.key,
      percent: jar.percent,
      name: jar.name,
      value: 0,
    }))
  );

  const { isLoading, onFetchData } = useLoading({
    callbackQuery: (result: any) => {
      if (result?.data?.data) {
        const jarsValue = sixJARS.map((jar) => ({
          key: jar.key,
          percent: jar.percent,
          name: jar.name,
          value: result?.data?.data?.[jar.key],
        }));
        setData(jarsValue);
      }
    },
    method: "get",
    api: `${process.env.REACT_APP_DOMAIN_API}/api/transaction/get-jars`,
  });

  useEffect(() => {
    onFetchData({});
  }, []);

  return { data, isLoading, onFetchData };
};
export default useGetJARS;
