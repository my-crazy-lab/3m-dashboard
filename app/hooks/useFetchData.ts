import React from "react";
import { useTranslation } from "react-i18next";
import { ToastAndroid } from "react-native";

const useFetchData = ({ url }: { url: string }) => {
  const { t } = useTranslation();
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  const fetchData = ({
    restHttp,
    callbackSuccess,
    callbackError,
    params,
  }: {
    /**
   * Example
   * headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      body: JSON.stringify(valuesFormatted),
   */
    restHttp: RequestInit;
    params?: URLSearchParams;
    callbackSuccess?: (result: any) => void;
    callbackError?: (error: any) => void;
  }) => {
    setIsLoading(true);
    let paramsChecked = params || "";
    return fetch(
      // `${process.env.REACT_APP_DOMAIN_API}/3m/api/${url}`,
      `http://192.168.1.14:6600/3m/api/${url}` + paramsChecked,
      {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        ...restHttp,
      }
    )
      .then((response) => response.json())
      .then((result) => {
        setIsLoading(false);

        callbackSuccess?.(result.data);
      })
      .catch((error: string) => {
        setIsLoading(false);

        ToastAndroid.show(t("HAVE_ERROR"), ToastAndroid.SHORT);
        console.log(error);

        callbackError?.(error);
      });
  };

  return { isLoading, fetchData };
};

export default useFetchData;
