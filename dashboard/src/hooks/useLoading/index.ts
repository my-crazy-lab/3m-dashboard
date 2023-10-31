// @ts-nocheck
import { useState } from "react";
import axios from "../../axios";

const useLoading = ({ callbackQuery, method, api }: any) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  async function onFetchData(...params: any) {
    console.log("in axios", method, api, params);
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
