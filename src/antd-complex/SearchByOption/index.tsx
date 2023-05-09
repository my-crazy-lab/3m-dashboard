import Space from 'antd/lib/space';
import SearchBase, { SearchBaseProps } from '../SearchBase';
import SelectBase, {
  ISectionOption,
  SelectBaseProps,
} from '../SelectBase';
import React, { useState } from 'react';

export interface SearchByOptionProps {
  searchProps?: Omit<SearchBaseProps, 'onSearch'>;
  selectProps?: Omit<SelectBaseProps, 'defaultValue'>;
  onSearch: (value: string, option: string) => void;
  defaultValue: SelectBaseProps['defaultValue'];
}

const SearchByOption = ({
  searchProps,
  selectProps,
  onSearch,
  defaultValue,
}: SearchByOptionProps) => {
  const [selected, setSelected] = useState<string>(defaultValue);

  const select = (value: ISectionOption['value']) => {
    if (value) setSelected(value.toString());
  };

  return (
    <Space.Compact>
      <SelectBase
        {...selectProps}
        defaultValue={defaultValue}
        onChange={select}
      />
      <SearchBase
        {...searchProps}
        onSearch={(value: string) => {
          onSearch(value, selected);
        }}
      />
    </Space.Compact>
  );
};

export default SearchByOption;
