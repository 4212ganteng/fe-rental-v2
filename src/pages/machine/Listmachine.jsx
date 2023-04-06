import { Button, DatePicker, Modal, Table } from "antd";
import moment from "moment/moment";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import MesinForm from "../../components/form/MesinForm";
import { API } from "../../config/api";
import { Mesin } from "../../components/columns/Mesin";

const Listmachine = () => {
  const [machine, setmachine] = useState();
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  // get machines
  const get = async () => {
    try {
      setLoading(true);
      const response = await API.get(`/machine/`);
      setmachine(response.data.data.product);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  // get type Mesin

  useEffect(() => {
    get();
  }, []);

  const handleEditChange = (e) => {
    setCustomerEdit({
      ...customerEdit,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async () => {
    try {
      setLoading(true);
      const response = await API.post("/machine/create", data);
      setLoading(false);

      toast.success("Berhasil menambah Mesin baru");
      get();
      setOpen(false);
    } catch (error) {
      setLoading(false);
      toast.error(error.response.data.message);

      console.log(error);
    }
  };

  const handleUpdate = async () => {
    try {
      setLoading(true);
      const response = await API.patch(
        `/machine/update/${customerEdit._id}`,
        customerEdit
      );
      setLoading(false);
      toast.success("Berhasil Update Data Pelanggan ");
      setOpenedit(false);
      get();
    } catch (error) {
      setLoading(false);
      toast.error(error.response.data.message);
    }
  };

  const handleDelete = async (id) => {
    let answer = window.confirm("are you sure?");
    if (answer) {
      try {
        await API.delete(`/machine/remove/${id}`);
        toast.success("Berhasil hapus data");
        get();
      } catch (error) {
        toast.error(error.response.data.message);
      }
    }
  };
  console.log({ machine });
  return (
    <>
      <div className="container px-5 h-screen">
        <Button
          className="bg-blue-400 my-4"
          onClick={() => navigate("/add-mesin")}
        >
          Tambah Mesin
        </Button>

        <Table columns={Mesin} dataSource={machine} />
      </div>
    </>
  );
};

export default Listmachine;
