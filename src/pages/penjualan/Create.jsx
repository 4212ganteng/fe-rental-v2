import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { API } from "../../config/api";
import { toast } from "react-toastify";
import Rental from "../../components/form/Rental";
import Buttoncomp from "../../components/atom/Buttoncomp";
import Penjualan from "../../components/form/Penjualan";

export default function Create() {
  const [customer, setcustomer] = useState();
  const [typemesin, setTypeMesin] = useState();
  const [sn, setSn] = useState();
  const [post, setPost] = useState();
  const navigate = useNavigate("/");
  const findCust = async () => {
    const res = await API.get("/customer/");
    console.log("cuss", res);
    setcustomer(res.data.data.customer);
  };
  const mesin = async () => {
    const res = await API.get(`machine/mesin/${post.merekId}`);
    console.log("mesin", res);
    setSn(res.data.data);
  };
  const type = async () => {
    const res = await API.get("/machine/type-mesin/");
    setTypeMesin(res.data.data);
  };

  const addmesin = async () => {
    try {
      const res = await API.post("/penjualan/create", post);
      toast.success("berhasil add penjualan");
      navigate("/selling");
    } catch (error) {
      toast.error(error.response.data.error.message);
      console.log(error);
    }
  };

  useEffect(() => {
    findCust();
    type();
  }, []);

  useEffect(() => {
    mesin();
  }, [post]);

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

  const onChangeDate = (date, dateString) => {
    setPost({
      ...post,
      date: dateString,
    });
  };

  console.log({ post });
  return (
    <div>
      <h1>Penjualan</h1>
      <Penjualan
        cust={customer?.map((cus) => ({
          label: cus.company,
          value: cus._id,
        }))}
        sn={sn?.map((serial) => ({
          label: serial.sn,
          value: serial._id,
        }))}
        typeMesin={typemesin?.map((item) => ({
          label: item.typeMesin,
          value: item._id,
        }))}
        onchangecust={onchangecust}
        onchangeSN={onchangeSN}
        onchangeType={onchangetype}
        // data={}
        handleChange={handleChange}
        onChangeDate={onChangeDate}
      />

      <Buttoncomp onclick={addmesin} title="submit" />
    </div>
  );
}
