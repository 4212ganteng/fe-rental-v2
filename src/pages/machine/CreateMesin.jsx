import React, { useEffect, useState } from "react";
import MesinForm from "../../components/form/MesinForm";
import { API } from "../../config/api";
import { toast } from "react-toastify";
import { Button, Modal } from "antd";
import Inputcomp from "../../components/atom/Inputcomp";
import Buttoncomp from "../../components/atom/Buttoncomp";
import { useNavigate } from "react-router-dom";

export default function CreateMesin() {
  const [type, setType] = useState();
  const [data, setData] = useState({
    merek: "",
    sn: "",
    jenis: "",
    price: 0,
    date: "",
    supplier: "",
    startCounter: 0,
    overhole: "",
  });
  const [loading, setLoading] = useState();
  const [open, setOpen] = useState(false);
  const [posttype, setPosttype] = useState({
    typeMesin: "",
  });
  const navigate = useNavigate();
  const getType = async () => {
    try {
      setLoading(true);
      const response = await API.get("/machine/type-mesin");
      setLoading(false);
      setType(response.data.data);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  //   adtype
  const addType = async () => {
    if (posttype.typeMesin == "") {
      return toast.error("wajib di isi");
    }
    try {
      setLoading(true);
      const response = await API.post("/machine/type-mesin", posttype);
      getType();
      setLoading(false);
      toast.success("berhasil tambah type");
      setOpen(false);
    } catch (error) {
      setLoading(false);
      toast.error(error.response.data.error.message);
      console.log(error);
    }
  };
  //   addMesin
  const addMesin = async () => {
    if (data.merek == "") {
      return toast.error(" type wajib di isi");
    } else if (data.sn == "") {
      return toast.error("SN wajib di isi");
    } else if (!data.price) {
      return toast.error(" Nilai perolehan wajib di isi");
    }
    try {
      setLoading(true);
      const response = await API.post("/machine/create", data);

      setLoading(false);
      toast.success("berhasil tambah Mesin");
      setTimeout(() => {
        navigate("/mesin");
      }, 1000);
    } catch (error) {
      setLoading(false);
      toast.error(error.response.data.message);
      console.log(error);
    }
  };

  useEffect(() => {
    getType();
  }, []);

  const handlechange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const onChangeDate = (date, dateString) => {
    setData({
      ...data,
      date: dateString,
    });
  };

  const changetype = (val) => {
    setData({
      ...data,
      merek: val,
    });
  };
  const typeChange = (e) => {
    setPosttype({
      ...posttype,
      [e.target.name]: e.target.value,
    });
  };

  console.log({ data });
  return (
    <>
      <div className="shadow-lg p-10 rounded-xl">
        <Buttoncomp onclick={() => setOpen(true)} title="Tambah Type Mesin" />
        <MesinForm
          handleChange={handlechange}
          onChangeDate={onChangeDate}
          onchangeType={changetype}
          typeMesin={type?.map((item) => ({
            label: item.typeMesin,

            value: item._id,
          }))}
        />

        <Buttoncomp onclick={addMesin} title="Submit" />
      </div>

      <Modal
        title="Tambah Type mesin"
        open={open}
        confirmLoading={loading}
        onCancel={() => setOpen(false)}
        footer={[
          <Button
            key="cancel"
            onClick={() => setOpen(false)}
            className="bg-red-500"
          >
            Cancel
          </Button>,
          <Button
            key="create"
            onClick={addType}
            className="mr-2 bg-blue-500 hover:text-slate-700"
          >
            Create
          </Button>,
        ]}
      >
        <Inputcomp
          name="typeMesin"
          placeholder="fuji xerox"
          title="Type Mesin"
          type="text"
          onchange={typeChange}
        />
      </Modal>
    </>
  );
}
