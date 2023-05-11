import axios from "axios";
import { useState } from "react";

const useLoading = ({ callbackQuery, method, api }: any) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  async function onFetchData(...params: any) {
    setIsLoading(true);

    await axios[method](api, ...params)
      .then((result) => {
        setIsLoading(false);

        callbackQuery?.(result, ...params);

        console.log(result);
      })
      .catch((error: any) => {
        setIsLoading(false);

        console.log(error);
      });
  }

  return { isLoading, onFetchData };
};

export default useLoading;
