// @ts-nocheck
import { useState } from "react";
import axios from "../../axios";

const useLoading = ({ callbackQuery, method, api, callbackError }: any) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  async function onFetchData({ params, data }: any) {
    console.log("in axios", method, api, params);
    setIsLoading(true);

    await axios(api, {
      withCredentials: true,
      method,
      params,
      data,
    })
      .then((result) => {
        console.log(result, api)
        setIsLoading(false);

        callbackQuery?.(result, { params, data });

        console.log(result);
      })
      .catch((error: any) => {
        setIsLoading(false);

        callbackError?.(error, { params, data });

        console.log(error);
      });
  }

  return { isLoading, onFetchData };
};

export default useLoading;
