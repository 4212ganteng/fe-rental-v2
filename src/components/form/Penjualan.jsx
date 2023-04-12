import { DatePicker } from "antd";
import React from "react";
import Inputcomp from "../atom/Inputcomp";
import SelectComp from "../atom/SelectComp";
const { RangePicker } = DatePicker;

export default function Penjualan({
  onchangeType,
  onchangeSN,
  onchangecust,
  cust,
  typeMesin,
  sn,
  data,
  handleChange,
  value,
  valsn,
  valtype,
  onchangeKeterangan,
  onChangeDate,
}) {
  const keterangan = [
    {
      label: "Upgrade",
      value: "upgrade",
    },

    {
      label: "Downgrade",
      value: "downgrade",
    },
    {
      label: "Tukar",
      value: "tukar",
    },
  ];
  return (
    <>
      <div className="max-w-lg py-10">
        <div className="">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Pilih Pelanggan
          </label>
          <SelectComp
            onChange={onchangecust}
            options={cust}
            placeholder="Type mesin"
            value={value}
          />
        </div>
        <div className="w-full">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Pilih Typemesin
          </label>
          <SelectComp
            onChange={onchangeType}
            options={typeMesin}
            placeholder="Type mesin"
            value={valtype}
          />
        </div>
        <div className="w-full">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Pilih Serial Number
          </label>
          <SelectComp
            onChange={onchangeSN}
            options={sn}
            placeholder="Type mesin"
            value={valsn}
          />
        </div>
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Tangal Penjualan
          </label>
          <DatePicker
            className="w-full"
            onChange={onChangeDate}
            // defaultValue={moment(val?.date)}
          />
        </div>
        <Inputcomp
          name="values"
          title="Harga"
          type="number"
          placeholder={data?.values}
          onchange={handleChange}
          // val=
        />
      </div>
    </>
  );
}
