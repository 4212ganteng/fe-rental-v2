import { Button, Table } from "antd";
import { Tabs } from "flowbite-react";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Mesin } from "../../components/columns/Mesin";
import { API } from "../../config/api";

const { TabPane } = Tabs;
const Listmachine = () => {
  const [machine, setmachine] = useState();
  const [loading, setLoading] = useState(false);

  const [aktif, setAktif] = useState();
  const [rent, setRent] = useState();
  const [sell, setSell] = useState();

  const handleTabClick = (tabIndex) => {
    setActiveTab(tabIndex);
  };

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

  const statusAktif = async () => {
    try {
      setLoading(true);
      const response = await API.get("machine/status/ready");
      setAktif(response.data.data.findcust);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  const statusSell = async () => {
    try {
      setLoading(true);
      const response = await API.get("machine/status/sell/");
      setSell(response.data.data.findcust);
      console.log(response);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  const statusRent = async () => {
    try {
      setLoading(true);
      const response = await API.get("machine/status/rent/");
      setRent(response.data.data.findcust);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  // get type Mesin

  useEffect(() => {
    get();
    statusAktif(), statusSell(), statusRent();
  }, []);

  // const handleEditChange = (e) => {
  //   setCustomerEdit({
  //     ...customerEdit,
  //     [e.target.name]: e.target.value,
  //   });
  // };

  // const handleSubmit = async () => {
  //   try {
  //     setLoading(true);
  //     const response = await API.post("/machine/create", data);
  //     setLoading(false);

  //     toast.success("Berhasil menambah Mesin baru");
  //     get();
  //     setOpen(false);
  //   } catch (error) {
  //     setLoading(false);
  //     toast.error(error.response.data.message);

  //     console.log(error);
  //   }
  // };

  // const handleUpdate = async () => {
  //   try {
  //     setLoading(true);
  //     const response = await API.patch(
  //       `/machine/update/${customerEdit._id}`,
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
  //       await API.delete(`/machine/remove/${id}`);
  //       toast.success("Berhasil hapus data");
  //       get();
  //     } catch (error) {
  //       toast.error(error.response.data.message);
  //     }
  //   }
  // };
  console.log({ machine });
  console.log({ sell });
  return (
    <>
      <Tabs.Group aria-label="Tabs with underline" style="underline">
        <Tabs.Item title="Dashboard">
          <div className="container px-5 h-screen">
            <Button
              className="bg-blue-400 my-4"
              onClick={() => navigate("/add-mesin")}
            >
              Tambah Mesin
            </Button>

            <Table columns={Mesin} dataSource={machine} />
          </div>
        </Tabs.Item>
        <Tabs.Item title="Aktif">
          {" "}
          <div className="container px-5 h-screen">
            <Button
              className="bg-blue-400 my-4"
              onClick={() => navigate("/add-mesin")}
            >
              Tambah Mesin
            </Button>

            <Table columns={Mesin} dataSource={aktif} />
          </div>
        </Tabs.Item>
        <Tabs.Item title="Sell">
          {" "}
          <div className="container px-5 h-screen">
            <Button
              className="bg-blue-400 my-4"
              onClick={() => navigate("/add-mesin")}
            >
              Tambah Mesin
            </Button>

            <Table columns={Mesin} dataSource={sell} />
          </div>
        </Tabs.Item>
        <Tabs.Item title="Rent">
          {" "}
          <div className="container px-5 h-screen">
            <Button
              className="bg-blue-400 my-4"
              onClick={() => navigate("/add-mesin")}
            >
              Tambah Mesin
            </Button>

            <Table columns={Mesin} dataSource={rent} />
          </div>
        </Tabs.Item>
        <Tabs.Item title="Disabled">Disabled content</Tabs.Item>
      </Tabs.Group>
    </>
  );
};

export default Listmachine;
