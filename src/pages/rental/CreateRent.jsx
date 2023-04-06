import React, { useEffect, useState } from "react";
import Rental from "../../components/form/Rental";
import { API } from "../../config/api";
import Buttoncomp from "../../components/atom/Buttoncomp";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const CreateRent = () => {
  const [customer, setcustomer] = useState();
  const [typemesin, setTypeMesin] = useState();
  const [sn, setSn] = useState();
  const [post, setPost] = useState();
  const navigate = useNavigate("/");
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

  const addmesin = async () => {
    try {
      const res = await API.post("/rental/create", post);
      toast.success("berhasil add rental");
      navigate("/");
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

  console.log({ post });

  return (
    <>
      <div>
        <Rental
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
        />
        <Buttoncomp onclick={addmesin} title="submit" />
      </div>
    </>
  );
};

export default CreateRent;
