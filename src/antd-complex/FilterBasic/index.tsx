import React from 'react';

import DateTimePickerOptional, {
  DateTimePickerOptionalProps,
} from '../DateTimePickerOptional';
import SearchByOption, { SearchByOptionProps } from '../SearchByOption';
import { Row, Col, Typography } from 'antd';

export interface FilterBasicProps {
  search?: {
    props: SearchByOptionProps;
    isDisplay: boolean | 1 | 0;
    label?: string;
  };
  date?: {
    props: DateTimePickerOptionalProps;
    isDisplay: boolean | 1 | 0;
    label?: string;
  };
}

const FilterBasic = ({ search, date }: FilterBasicProps) => {
  if (!search && !date) return null;

  return (
    <Row gutter={32}>
      {search && search.isDisplay ? (
        <Col>
          {search.label ? (
            <Typography.Text>{search.label}</Typography.Text>
          ) : null}
          <SearchByOption {...search.props} />
        </Col>
      ) : null}
      {date && date.isDisplay ? (
        <Col>
          {date.label ? (
            <Typography.Text>{date.label}</Typography.Text>
          ) : null}
          <DateTimePickerOptional style={{ width: 200 }} {...date.props} />
        </Col>
      ) : null}
    </Row>
  );
};

export default FilterBasic;
