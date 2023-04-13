import React from "react";
import SelectComp from "../atom/SelectComp";
import Inputcomp from "../atom/Inputcomp";
import { DatePicker } from "antd";
import moment from "moment";
const { RangePicker } = DatePicker;

export default function Rental({
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
  handleDateRangeChange,
  dateRange,
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

        <div className="max-w-lg">
          <Inputcomp
            name="duration"
            title="Durasi"
            type="number"
            placeholder={data?.duration}
            onchange={handleChange}
            // val=
          />

          <div className="w-full">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Tanggal Rental
            </label>
            <RangePicker
              format="YYYY-MM-DD"
              onChange={handleDateRangeChange}
              // value={dateRange}
              className="w-full"
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

          <div className="w-full">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Keterangan
            </label>
            <SelectComp
              onChange={onchangeKeterangan}
              options={keterangan}
              placeholder="ISI JIKA UPGRADE / DOWNGRADE SAJA"
            />
          </div>
        </div>
      </div>
    </>
  );
}
