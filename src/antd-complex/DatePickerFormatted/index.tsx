import DatePickerBase, {
  DatePickerBaseProps,
} from 'component-base/antd/DatePickerBase';
import { Moment } from 'moment';
import React from 'react';
import { ISingleDate } from 'types-root/common';

export interface DatePickerFormattedProps
  extends Omit<DatePickerBaseProps, 'onChange' | 'picker'> {
  onChange?: (args: {
    date?: Moment;
    rangeDate: [Date, Date] | null;
    picker: ISingleDate;
  }) => void;
  picker?: Exclude<DatePickerBaseProps['picker'], 'time'>; // moment dont have "time", just hour | minute | second
}

const DatePickerFormatted = ({
  onChange,
  picker = 'date',
  ...props
}: DatePickerFormattedProps) => (
  <DatePickerBase
    {...props}
    picker={picker}
    onChange={(e) => {
      if (e) {
        onChange?.({
          date: e,
          rangeDate: [
            e
              .startOf(picker)
              .hours(0)
              .minutes(0)
              .seconds(0)
              .milliseconds(0)
              .toDate(),
            e
              .endOf(picker)
              .endOf('date')
              .endOf('hour')
              .endOf('minute')
              .endOf('second')
              .toDate(),
          ],
          picker,
        });
      } else onChange?.({ rangeDate: null, picker });
    }}
  />
);

export default DatePickerFormatted;
