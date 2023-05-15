import { Select } from "antd";
import {
  TRANSACTION_TYPE_EXPENDITURE,
  IN_OUT,
  TransactionTypeExpenditureData,
  TransactionTypeRevenue,
} from "../../constants";

const SelectTransactionType = ({ callbackChange }: any) => {
  return (
    <Select
      mode="multiple"
      defaultValue={[TRANSACTION_TYPE_EXPENDITURE.EAT]}
      style={{ width: 360 }}
      options={[
        {
          label: IN_OUT.EXPENDITURE,
          options: [...TransactionTypeExpenditureData, IN_OUT.EXPENDITURE].map(
            (item) => ({
              label: item,
              value: item,
            })
          ),
        },
        {
          label: IN_OUT.REVENUE,
          options: [...TransactionTypeRevenue, IN_OUT.REVENUE].map((item) => ({
            label: item,
            value: item,
          })),
        },
      ]}
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
