import { Select } from "antd";
import {
  IN_OUT,
  TransactionTypeExpenditureData,
  TransactionTypeRevenue,
} from "../../constants";
import { useMemo } from "react";

const SelectTransactionType = ({ type, callbackChange, modeSingle }: any) => {
  const options = useMemo(() => {
    const ex = {
      label: IN_OUT.EXPENDITURE,
      options: [...TransactionTypeExpenditureData, IN_OUT.EXPENDITURE].map(
        (item) => ({
          label: item,
          value: item,
        })
      ),
    };
    const re = {
      label: IN_OUT.REVENUE,
      options: [...TransactionTypeRevenue, IN_OUT.REVENUE].map((item) => ({
        label: item,
        value: item,
      })),
    };

    if (type === IN_OUT.EXPENDITURE) return [ex];
    if (type === IN_OUT.REVENUE) return [re];
    return [ex, re];
  }, [type]);

  return (
    <Select
      mode={modeSingle ? undefined : "multiple"}
      defaultValue={[]}
      style={{ width: 360 }}
      options={options}
      onChange={(e: any) => {
        if (e.includes(IN_OUT.EXPENDITURE) && e.includes(IN_OUT.REVENUE)) {
          callbackChange?.({ type: {}, "label.type": undefined });
        } else if (
          e.includes(IN_OUT.EXPENDITURE) &&
          !e.includes(IN_OUT.REVENUE)
        ) {
          callbackChange?.({
            type: IN_OUT.EXPENDITURE,
            "label.type": undefined,
          });
        } else if (
          !e.includes(IN_OUT.EXPENDITURE) &&
          e.includes(IN_OUT.REVENUE)
        ) {
          callbackChange?.({ type: IN_OUT.REVENUE, "label.type": undefined });
        } else callbackChange?.({ type: undefined, "label.type": e });
      }}
    />
  );
};

export default SelectTransactionType;
