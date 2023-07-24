import React from "react";
import useConfirmation from "./useConfirmation";

const useCreateTransaction = () => {
  const [data, setData] = React.useState();
  const [error, setError] = React.useState();

  const { isLoading, confirmation } = useConfirmation({
    url: "transaction/create",
  });

  const fetching = (valuesFormatted: {
    type: string;
    label: {
      value: number;
      type: string;
    };
    userCode: number;
  }) => {
    return confirmation({
      restHttp: {
        method: "POST",
        body: JSON.stringify(valuesFormatted),
      },
      callbackSuccess: setData,
      callbackError: setError,
    });
  };

  return { fetchData: fetching, data, error, isLoading };
};

export default useCreateTransaction;
