import axios from "axios";
import { useState } from "react";

const useLoading = ({ callbackQuery }: any) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  function onFetchData(method: any, ...args: any) {
    setIsLoading(true);

    return axios[method](...args)
      .then((result) => {
        setIsLoading(false);

        callbackQuery?.(result, ...args);

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
