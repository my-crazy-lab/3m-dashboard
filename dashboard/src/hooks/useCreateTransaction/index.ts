import useLoading from "../useLoading";

const useCreateTransaction = ({ callbackDone }: any) => {
  const { isLoading, onFetchData } = useLoading({
    callbackQuery: () => {
      callbackDone?.();
    },
    method: "post",
    api: `${process.env.REACT_APP_DOMAIN_API}/api/transaction/create`,
  });

  return { isLoading, onFetchData };
};

export default useCreateTransaction;
