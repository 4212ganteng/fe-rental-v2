import React from "react";
import Inputcomp from "../atom/Inputcomp";
import Uploadcom from "../atom/Uploadcom";
import { DatePicker } from "antd";
import SelectComp from "../atom/SelectComp";

export default function CustForm({
  handleChange,
  val,
  changeDate,
  onchangeStatus,
  onchangeKeterangan,
}) {
  const status = [
    {
      label: "Reguler",
      value: "reguler",
    },
    {
      label: "VIP",
      value: "vip",
    },
    {
      label: "VVIP",
      value: "vvip",
    },
  ];

  const keterangan = [
    {
      label: "Aktif",
      value: "aktif",
    },
    {
      label: "OFF",
      value: "off",
    },
    {
      label: "Cuti",
      value: "cuti",
    },
  ];
  return (
    <>
      <div className="max-w-lg py-10 px-5">
        <Inputcomp
          name="layanan"
          title="Layanan"
          type="text"
          placeholder="Promo / Netto / Beli Lepas /Rental"
          val={val?.layanan}
          onchange={handleChange}
        />
        <Inputcomp
          name="idpl"
          title="ID Pelanggan"
          type="text"
          placeholder=""
          val={val?.idpl}
          onchange={handleChange}
        />

        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          Tanggal Bergabung
        </label>
        <DatePicker
          onChange={changeDate}
          className="w-full"
          // format={"YYY-MM-DD"}
        />

        <Inputcomp
          name="name"
          title="Nama Pelanggan"
          type="text"
          placeholder="silahkan masukan nama Pelanggan"
          val={val?.name}
          onchange={handleChange}
        />

        <Inputcomp
          name="company"
          title="Perusahaan"
          type="text"
          placeholder="silahkan masukan Perusahaan"
          val={val?.company}
          onchange={handleChange}
        />

        <div className="w-full">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Status
          </label>
          <SelectComp
            onChange={onchangeStatus}
            options={status}
            placeholder="Reguler"
          />
        </div>

        <div className="w-full">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Keterangan
          </label>
          <SelectComp
            onChange={onchangeKeterangan}
            options={keterangan}
            placeholder="Aktif"
          />
        </div>

        <Inputcomp
          name="address"
          title="Alamat"
          type="text"
          placeholder="silahkan masukan Alamat"
          val={val?.address}
          onchange={handleChange}
        />

        <Inputcomp
          name="email"
          title="email"
          type="email"
          placeholder="azizganteng@mail.com"
          val={val?.email}
          onchange={handleChange}
          required={true}
        />

        <Inputcomp
          name="hp"
          title="No.telephone"
          type="number"
          placeholder=""
          val={val?.hp}
          onchange={handleChange}
        />

        <Uploadcom />
      </div>
    </>
  );
}
