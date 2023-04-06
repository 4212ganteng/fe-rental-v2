import { DatePicker } from "antd";
import moment from "moment";
import React from "react";
import Inputcomp from "../atom/Inputcomp";
import SelectComp from "../atom/SelectComp";

export default function MesinForm({
  handleChange,
  onChangeDate,
  val,
  onchangeType,
  typeMesin,
}) {
  return (
    <>
      <div className="max-w-lg py-10">
        <div className="w-full">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            TypeMesin
          </label>
          <SelectComp
            onChange={onchangeType}
            options={typeMesin}
            placeholder="Type mesin"
          />
        </div>

        <Inputcomp
          name="sn"
          title="Nomor Seri"
          type="text"
          placeholder="silahkan masukan Nomor Seri"
          onchange={handleChange}
          val={val?.sN}
          required={true}
        />

        <Inputcomp
          name="startCounter"
          title="Counter Awal"
          type="text"
          placeholder="silahkan masukan jenis"
          onchange={handleChange}
          val={val?.jenis}
        />
        <Inputcomp
          name="jenis"
          title="Jenis"
          type="text"
          placeholder="silahkan masukan jenis"
          onchange={handleChange}
          val={val?.jenis}
        />
        <Inputcomp
          name="price"
          title="Nilai Perolehan"
          type="text"
          placeholder="silahkan masukan Nilai Perolehan"
          onchange={handleChange}
          val={val?.price}
        />
        <Inputcomp
          name="overhole"
          title="Biaya Overhoule"
          type="text"
          placeholder="silahkan masukan Nilai Perolehan"
          onchange={handleChange}
          val={val?.price}
        />
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Tangal Perolehan
          </label>
          <DatePicker
            className="w-full"
            onChange={onChangeDate}
            // defaultValue={moment(val?.date)}
          />
        </div>
      </div>
    </>
  );
}
