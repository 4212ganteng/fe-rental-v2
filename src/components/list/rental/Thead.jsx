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
            ID Pelanggan
          </th>
          <th scope="col" className="px-6 py-3">
            Pelanggan
          </th>
          <th scope="col" className="px-6 py-3">
            Serial Number
          </th>
          <th scope="col" className="px-6 py-3">
            Merek
          </th>
          <th scope="col" className="px-6 py-3">
            Durasi
          </th>
          <th scope="col" className="px-6 py-3">
            Awal Rental
          </th>
          <th scope="col" className="px-6 py-3">
            Akhir Rental
          </th>
          <th scope="col" className="px-6 py-3">
            Harga
          </th>
          <th scope="col" className="px-6 py-3">
            Keterangan
          </th>

          <th scope="col" className="px-6 py-3">
            Status Mesin
          </th>
          <th scope="col" className="px-6 py-3">
            Status Pelanggan
          </th>
          <th scope="col" className="px-6 py-3">
            <span className="">Actions</span>
          </th>
        </tr>
      </thead>
      <tbody>{children}</tbody>
    </>
  );
}
