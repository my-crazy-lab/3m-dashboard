import RangePickerBase, { RangePickerBaseProps } from "../RangePickerBase";
import { Moment } from "moment";
import React from "react";
import { IRangeDate } from "../types";

export interface RangePickerFormattedProps
  extends Omit<RangePickerBaseProps, "onChange"> {
  onChange?: (args: {
    date?: Moment;
    picker: IRangeDate;
    rangeDate: [Date, Date] | null;
  }) => void;
}

const RangePickerFormatted = ({
  onChange,
  picker,
  ...props
}: RangePickerFormattedProps) => {
  if (!picker || picker === "time") return null;

  return (
    <RangePickerBase
      {...props}
      picker={picker}
      onChange={(e) => {
        if (e && e[0] && e[1]) {
          onChange?.({
            rangeDate: [e[0].toDate(), e[1].toDate()],
            picker: `range-${picker}`,
          });
        } else onChange?.({ rangeDate: null, picker: `range-${picker}` });
      }}
    />
  );
};

export default RangePickerFormatted;
