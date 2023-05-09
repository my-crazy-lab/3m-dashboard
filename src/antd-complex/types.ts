export type ISingleDate = 'date' | 'week' | 'month' | 'quarter' | 'year';

export type IRangeDate =
  | 'range-date'
  | 'range-week'
  | 'range-month'
  | 'range-quarter'
  | 'range-year';

export type IDatePickerFormatted = ISingleDate | IRangeDate;