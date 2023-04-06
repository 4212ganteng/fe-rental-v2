import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Buttoncomp from "../../components/atom/Buttoncomp";
import Rental from "../../components/form/Rental";
import { API } from "../../config/api";

export default function EditRental() {
  const { id } = useParams();
  const [rental, setRental] = useState();
  const [customer, setcustomer] = useState();
  const [typemesin, setTypeMesin] = useState();
  const [sn, setSn] = useState();
  const [post, setPost] = useState({});

  const getbyId = async () => {
    const res = await API.get(`/rental/detail/${id}`);

    setRental(res.data.rental);
  };

  const findCust = async () => {
    const res = await API.get("/customer/");
    setcustomer(res.data.data.customer);
  };

  const mesin = async () => {
    const res = await API.get(`machine/mesin/${post.merekId}`);
    setSn(res.data.data);
  };
  const type = async () => {
    const res = await API.get("/machine/type-mesin/");
    setTypeMesin(res.data.data);
  };

  const onchangecust = (val) => {
    setPost({
      ...post,
      customerId: val,
    });
  };

  const onchangeSN = (val) => {
    setPost({
      ...post,
      productId: val,
    });
  };
  const onchangetype = (val) => {
    setPost({
      ...post,
      merekId: val,
    });
  };

  const handleChange = (e) => {
    setPost({
      ...post,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    getbyId();
    findCust();
    type();
  }, []);

  useEffect(() => {
    mesin();
  }, [post]);

  console.log({ rental });
  return (
    <>
      <>
        <div>
          <Rental
            cust={customer?.map((cus) => ({
              label: cus.company,
              value: cus._id,
            }))}
            value={rental?.customer.company}
            onchangecust={onchangecust}
            sn={sn?.map((serial) => ({
              label: serial.sn,
              value: serial._id,
            }))}
            valsn={rental?.product.sn}
            typeMesin={typemesin?.map((item) => ({
              label: item.typeMesin,
              value: item._id,
            }))}
            valtype={rental?.merek?.typeMesin}
            onchangeSN={onchangeSN}
            onchangeType={onchangetype}
            handleChange={handleChange}
          />
          <Buttoncomp title="submit" />
        </div>
      </>
    </>
  );
}
