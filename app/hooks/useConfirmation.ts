import React from "react";
import { useTranslation } from "react-i18next";
import { Alert, ToastAndroid } from "react-native";

const useConfirmation = ({ url }: { url: string }) => {
  const { t } = useTranslation();
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  const confirmation = ({
    restHttp,
    callbackSuccess,
    callbackError,
    params = "",
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
    params?: string;
    callbackSuccess?: (result: any) => void;
    callbackError?: (error: any) => void;
  }) =>
    Alert.alert(t("CONFIRMATION"), t("ARE_YOU_SURE"), [
      {
        text: t("YES"),
        onPress: () => {
          setIsLoading(true);

          fetch(
            // `${process.env.REACT_APP_DOMAIN_API}/3m/api/${url}`,
            `http://192.168.1.14:6600/3m/api/${url}` + params,
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

              callbackSuccess?.(result);

              ToastAndroid.show(t("SUCCESSFUL"), ToastAndroid.SHORT);
            })
            .catch((error: string) => {
              setIsLoading(false);

              ToastAndroid.show(t("HAVE_ERROR"), ToastAndroid.SHORT);
              console.log(error);

              callbackError?.(error);
            });
        },
      },
      {
        text: t("CANCEL"),
        style: "cancel",
      },
    ]);

  return { isLoading, confirmation };
};

export default useConfirmation;
