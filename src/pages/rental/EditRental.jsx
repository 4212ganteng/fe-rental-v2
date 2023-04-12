import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Buttoncomp from "../../components/atom/Buttoncomp";
import Rental from "../../components/form/Rental";
import { API } from "../../config/api";
import { toast } from "react-toastify";

export default function EditRental() {
  const { id } = useParams();
  const [rental, setRental] = useState();
  const [customer, setcustomer] = useState();
  const [typemesin, setTypeMesin] = useState();
  const [sn, setSn] = useState();
  const [post, setPost] = useState({});

  const getbyId = async () => {
    const res = await API.get(`/rental/detail/${id}`);
    console.log("result", res.data);

    setRental(res.data.rental);
    setPost({
      customerId: res.data.rental.customer.company,
      merekId: res?.data?.merek?._id,
      newProduct: res.data.rental.product.sn,
      // ...res.data.rental,
    });
  };

  const findCust = async () => {
    const res = await API.get("/customer/");
    setcustomer(res.data.data.customer);
  };

  const mesin = async () => {
    const res = await API.get(`machine/mesin/${post?.merekId}`);
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
      newProduct: val,
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

  const onchangeKeterangan = (status) => {
    setPost({
      ...post,
      keterangan: status,
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

  const updateRent = async () => {
    try {
      const res = await API.patch(`/rental/update/${id}`, post);
      toast.success("berhasil update rental");
      navigate("/");
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.error.message);
    }
  };
  console.log(sn);
  console.log(post);
  return (
    <>
      <>
        <div>
          <Rental
            cust={customer?.map((cus) => ({
              label: cus.company,
              value: cus._id,
            }))}
            value={post.customerId}
            onchangecust={onchangecust}
            sn={sn?.map((serial) => ({
              label: serial.sn,
              value: serial._id,
            }))}
            valsn={post.newProduct}
            typeMesin={typemesin?.map((item) => ({
              label: item.typeMesin,
              value: item._id,
            }))}
            valtype={post.merekId}
            onchangeSN={onchangeSN}
            onchangeType={onchangetype}
            handleChange={handleChange}
            onchangeKeterangan={onchangeKeterangan}
            data={rental}
          />
          <Buttoncomp title="submit" onclick={updateRent} />
        </div>
      </>
    </>
  );
}
