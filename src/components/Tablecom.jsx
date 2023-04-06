import Link from "antd/es/typography/Link";
import React from "react";

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
            <td className="px-6 py-4">{machine}</td>
            <td className="px-6 py-4">{duration} Bulan</td>
            <td className="px-6 py-4">Rp{price}</td>
            {!show ? (
              <td className="px-6 py-4 text-center flex justify-between">
                <button onClick={onclick}>Upgrade & Downgrade</button>
                {/* <button onClick={handleRemove}>Delete</button> */}
              </td>
            ) : null}
          </>
        ) : (
          <>
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
