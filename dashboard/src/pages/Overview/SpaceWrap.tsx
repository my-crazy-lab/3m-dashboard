import { Space, SpaceProps } from "antd";
import React from "react";

const SpaceWrap = ({ children }: SpaceProps) => {
  return (
    <Space wrap size="middle" style={{ marginBottom: 16 }}>
      {children}
    </Space>
  );
};

export default SpaceWrap;
