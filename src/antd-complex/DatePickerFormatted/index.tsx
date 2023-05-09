import DatePickerBase, { DatePickerBaseProps } from "../DatePickerBase";
import React from "react";
import { ISingleDate } from "../types";

export interface DatePickerFormattedProps
  extends Omit<DatePickerBaseProps, "onChange" | "picker"> {
  onChange?: (args: {
    date?: any;
    rangeDate: [Date, Date] | null;
    picker: ISingleDate;
  }) => void;
  picker?: Exclude<DatePickerBaseProps["picker"], "time">;
}

const DatePickerFormatted = ({
  onChange,
  picker = "date",
  ...props
}: DatePickerFormattedProps) => (
  <DatePickerBase
    {...props}
    picker={picker}
    onChange={(e) => {
      if (e) {
        onChange?.({
          date: e,
          rangeDate: [e.toDate(), e.toDate()],
          picker,
        });
      } else onChange?.({ rangeDate: null, picker });
    }}
  />
);

export default DatePickerFormatted;
