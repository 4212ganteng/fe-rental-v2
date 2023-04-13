import { Button, Table } from "antd";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { Customers } from "../../components/columns/Customers";
import { API } from "../../config/api";
import { useNavigate } from "react-router-dom";

const ListCustomers = () => {
  const [customer, setCustomer] = useState();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  // get customers
  const get = async () => {
    const response = await API.get(`/customer/`);
    setCustomer(response.data.data.customer);
  };

  useEffect(() => {
    get();
  }, []);

  const handleSubmit = async () => {
    setLoading(true);
    try {
      const response = await API.post("/customer/create", data);
      setLoading(false);
      toast.success("Berhasil menambah pelanggan baru");
      get();
      setOpen(false);
    } catch (error) {
      setLoading(false);
      toast.error(error.response.data.message);
    }
  };

  console.log({ customer });
  // const handleUpdate = async () => {
  //   setLoading(true);
  //   try {
  //     const response = await API.patch(
  //       `/customer/update/${customerEdit._id}`,
  //       customerEdit
  //     );
  //     setLoading(false);
  //     toast.success("Berhasil Update Data Pelanggan ");
  //     setOpenedit(false);
  //     get();
  //   } catch (error) {
  //     setLoading(false);
  //     toast.error(error.response.data.message);
  //   }
  // };

  // const handleDelete = async (id) => {
  //   let answer = window.confirm("are you sure?");
  //   if (answer) {
  //     try {
  //       await API.delete(`/customer/remove/${id}`);
  //       toast.success("Berhasil hapus data");
  //       get();
  //     } catch (error) {
  //       toast.error(error.response.data.message);
  //     }
  //   }
  // };

  const handlechange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      {loading ? (
        <p className="bg-white text-center">Sabar cuy.. Sedang loading..</p>
      ) : (
        <>
          <div className="relative overflow-x-auto shadow-md sm:rounded-lg h-screen">
            <Button
              className="bg-blue-400 my-4"
              onClick={() => navigate("/add-cust")}
            >
              Tambah Pelanggan
            </Button>

            <Table columns={Customers} dataSource={customer} />
          </div>
        </>
      )}
    </>
  );
};

export default ListCustomers;
