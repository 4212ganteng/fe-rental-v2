import React from "react";

export default function Thead({ children }) {
  return (
    <>
      <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
        <tr>
          <th scope="col" className="px-6 py-3">
            #
          </th>
          <th scope="col" className="px-6 py-3">
            Tanggal Faktur
          </th>
          <th scope="col" className="px-6 py-3">
            ID Pelanggan
          </th>
          <th scope="col" className="px-6 py-3">
            Nama Pelanggan
          </th>
          <th scope="col" className="px-6 py-3">
            Merek Mesin
          </th>
          <th scope="col" className="px-6 py-3">
            Total Pemakaian
          </th>
          <th scope="col" className="px-6 py-3">
            Total Tagihan
          </th>
        </tr>
      </thead>
      <tbody>{children}</tbody>
    </>
  );
}
