import React, { useEffect, useState } from "react";
import Thead from "../../components/fakturRent/Thead";
import Tablefaktur from "../../components/fakturRent/Tablefaktur";
import { useParams } from "react-router-dom";
import { API } from "../../config/api";
import moment from "moment";

export default function Faktur() {
  const [data, setData] = useState();
  const [tagihan, setTagihan] = useState();
  const { id } = useParams();

  const getbyId = async () => {
    const res = await API.get(`/rental/detail/${id}`);
    setData(res.data);
  };

  useEffect(() => {
    getbyId();
  }, []);

  console.log({ data });
  return (
    <>
      <Thead>
        {data?.tagihan?.map((item, index) => (
          <Tablefaktur
            idpl={data?.rental.customer.idpl}
            nama={data?.rental.customer.company}
            date={moment(item.createdAt).format("DD/MM/YY")}
            pemakaian={item.pemakaian}
            tagihan={item.tagihan}
            merek={data?.merek?.typeMesin + "-" + data?.rental.product.sn}
            keyId={index}
          />
        ))}
      </Thead>
    </>
  );
}
