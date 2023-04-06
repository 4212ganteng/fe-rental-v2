import { Select } from "antd";
import React from "react";

export default function SelectComp({
  options,
  onChange,
  onSearch,
  placeholder,
  value,
}) {
  return (
    <>
      <Select
        showSearch
        className="w-full"
        placeholder={placeholder}
        optionFilterProp="children"
        onChange={onChange}
        onSearch={onSearch}
        filterOption={(input, option) =>
          (option?.label ?? "").toLowerCase().includes(input.toLowerCase())
        }
        options={options}
        value={value}
      />
    </>
  );
}
