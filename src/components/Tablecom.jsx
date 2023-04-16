import React from "react";
import { Link } from "react-router-dom";

const Tablecom = ({
  duration,
  price,
  customer,
  machine,
  edit,
  show,
  onclick,
  keyId,
  handleRemove,
  no,
  start,
  end,
  merek,
  idpl,
  tarik,
  cust,
  mesin,
  ket,
  tagihan,
  link,
}) => {
  return (
    <>
      <tr
        className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
        key={keyId}
      >
        <th
          scope="row"
          className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white uppercase"
        >
          {customer}
        </th>

        {!edit ? (
          <>
            <Link to={`/faktur/${link}`}>
              <td className="px-6 py-4">{idpl}</td>
            </Link>
            <td className="px-6 py-4">{no}</td>
            <td className="px-6 py-4">{machine}</td>
            <td className="px-6 py-4">{merek}</td>
            <td className="px-6 py-4">{duration} Tahun</td>
            <td className="px-6 py-4">{start} </td>
            <td className="px-6 py-4">{end} </td>
            <td className="px-6 py-4">Rp{price}</td>
            <td className="px-6 py-4">{ket}</td>
            <td className="px-6 py-4"> {mesin}</td>
            <td className="px-6 py-4"> {cust}</td>
            {!show ? (
              <td className="px-6 py-4 text-center flex justify-between">
                <button
                  className="mr-3 bg-sky-500 rounded-lg px-5 py-1 text-white hover:bg-sky-600"
                  onClick={tarik}
                >
                  Tarik
                </button>
                <button
                  className="mr-3 bg-sky-500 rounded-lg px-5 py-1 text-white hover:bg-sky-600"
                  onClick={tagihan}
                >
                  tagihan
                </button>

                <button
                  className="mr-3 bg-sky-500 rounded-md px-2 py-1 text-slate-100 hover:bg-sky-600"
                  onClick={onclick}
                >
                  Upgrade & Downgrade
                </button>
              </td>
            ) : null}
          </>
        ) : (
          <>
            <td className="px-6 py-4">{no}</td>
            <td className="px-6 py-4">{machine}</td>
            <td className="px-6 py-4">{duration} </td>
            <td className="px-6 py-4">{price}</td>
          </>
        )}
      </tr>
    </>
  );
};

export default Tablecom;
