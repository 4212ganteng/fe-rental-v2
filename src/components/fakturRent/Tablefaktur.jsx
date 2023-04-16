import Link from "antd/es/typography/Link";
import React from "react";

const Tablefaktur = ({
  keyId,
  date,
  pemakaian,
  tagihan,
  merek,
  nama,
  idpl,
}) => {
  return (
    <>
      <tr
        className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
        key={keyId}
      >
        <>
          <td className="px-6 py-4"> oi</td>
          <td className="px-6 py-4"> {date}</td>
          <td className="px-6 py-4"> {idpl}</td>
          <td className="px-6 py-4"> {nama}</td>
          <td className="px-6 py-4"> {merek}</td>
          <td className="px-6 py-4"> {pemakaian}</td>
          <td className="px-6 py-4"> {tagihan}</td>
        </>
      </tr>
    </>
  );
};

export default Tablefaktur;
