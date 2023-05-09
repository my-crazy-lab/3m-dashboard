import Space from 'antd/lib/space';
import SelectBase from '../SelectBase';
import { Moment } from 'moment';
import React, { useState } from 'react';
import DatePickerFormatted from '../DatePickerFormatted';
import RangePickerFormatted from '../RangePickerFormatted';
import { IDatePickerFormatted } from '../types';

export interface DateTimePickerOptionalProps {
  defaultSelected?: IDatePickerFormatted;
  onChange?: (args: {
    date?: Moment;
    rangeDate: [Date, Date] | null;
    picker: IDatePickerFormatted;
  }) => void;
  defaultValue?: any;
  style?: any;
}

const DateTimePickerOptional = ({
  defaultSelected = 'date',
  ...props
}: DateTimePickerOptionalProps) => {
  const [selected, setSelected] =
    useState<IDatePickerFormatted>(defaultSelected);

  const renderDatePicker = () => {
    switch (selected) {
      case 'date':
        return <DatePickerFormatted picker="date" {...props} />;
      case 'week':
        return <DatePickerFormatted picker="week" {...props} />;
      case 'month':
        return <DatePickerFormatted picker="month" {...props} />;
      case 'quarter':
        return <DatePickerFormatted picker="quarter" {...props} />;
      case 'year':
        return <DatePickerFormatted picker="year" {...props} />;
      case 'range-date':
        return <RangePickerFormatted picker="date" {...props} />;
      case 'range-week':
        return <RangePickerFormatted picker="week" {...props} />;
      case 'range-month':
        return <RangePickerFormatted picker="month" {...props} />;
      case 'range-quarter':
        return <RangePickerFormatted picker="quarter" {...props} />;
      case 'range-year':
        return <RangePickerFormatted picker="year" {...props} />;
      default:
        return <></>;
    }
  };

  return (
    <Space.Compact>
      <SelectBase<IDatePickerFormatted>
        options={[
          {
            label: 'Date',
            value: 'date',
          },
          {
            label: 'Week',
            value: 'week',
          },
          {
            label: 'Month',
            value: 'month',
          },
          {
            label: 'Quarter',
            value: 'quarter',
          },
          {
            label: 'Year',
            value: 'year',
          },
          {
            label: 'Range date',
            value: 'range-date',
          },
          {
            label: 'Range week',
            value: 'range-week',
          },
          {
            label: 'Range month',
            value: 'range-month',
          },
          {
            label: 'Range quarter',
            value: 'range-quarter',
          },
          {
            label: 'Range year',
            value: 'range-year',
          },
        ]}
        onChange={(value) => {
          if (typeof value === 'string') setSelected(value);
        }}
        defaultValue={defaultSelected}
      />
      {renderDatePicker()}
    </Space.Compact>
  );
};

export default DateTimePickerOptional;
