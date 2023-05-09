import Input, { SearchProps } from 'antd/lib/input';
import React from 'react';

export type SearchBaseProps = SearchProps;

const SearchBase = ({ ...props }) => <Input.Search {...props} />;

export default SearchBase;
