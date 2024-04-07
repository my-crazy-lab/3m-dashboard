import { DatePicker } from "antd";
import moment from "moment";

const RangePickerTransaction = ({ callbackChange }: any) => {
  return (
    <DatePicker.RangePicker
      defaultValue={[moment().startOf("month"), moment().endOf("date")]}
      onChange={(e: any) => {
        if (e && Array.isArray(e))
          callbackChange({
            rangeDate: [
              e[0].startOf("date").toDate(),
              e[1].endOf("date").toDate(),
            ],
          });
        else callbackChange({ rangeDate: undefined });
      }}
    />
  );
};

export default RangePickerTransaction;
