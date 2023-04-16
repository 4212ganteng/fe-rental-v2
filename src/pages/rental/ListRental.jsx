import { Button, Modal, Table } from "antd";
import moment from "moment";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Tablecom from "../../components/Tablecom";
import { API } from "../../config/api";
import { Rental } from "../../components/columns/Rental";
import Thead from "../../components/list/rental/Thead";
import Inputcomp from "../../components/atom/Inputcomp";

const ListRental = () => {
  const [rental, setrental] = useState([]);
  const [tagihan, setTagihan] = useState();
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  // get rentals
  const get = async () => {
    const response = await API.get(`/rental/`);
    setrental(response.data.rentals);
  };
  useEffect(() => {
    get();
  }, []);

  console.log({ rental });

  const handleRemove = async (id) => {
    try {
      let answer = window.confirm("Are you sure you want to remove?");
      if (answer) {
        const response = await API.delete(`/rental/delete/${id}`);
        get();
        toast.success("berhasil hapus data");
      }
    } catch (error) {
      console.log(error);
    }
  };
  const handleTarik = async (id) => {
    try {
      let answer = window.confirm(
        "tarik mesin akan merubah status mesin dan pelanggan menjadi off"
      );
      if (answer) {
        const response = await API.patch(`/rental/tarik/${id}`);

        toast.success("berhasil berhasil tarik mesin");
        console.log("hi dude");
        get();
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.error.message);
    }
  };

  const cvTime = (val) => {
    return moment(val).format("DD/MM/YY");
  };

  const tagihanChange = (e) => {
    setTagihan({
      ...tagihan,
      [e.target.name]: e.target.value,
    });
  };

  const addTagihan = async () => {
    try {
      const response = await API.post(
        `/rental/tagihan/${tagihan.idmodal}`,
        tagihan
      );

      toast.success("berhasil tambah tagihan");
      setOpen(false);
    } catch (error) {
      // toast.error(error.response.data.error.message);
      setOpen(false);
      console.log(error);
    }
  };

  const handlemodal = (id) => {
    setOpen(true);
    setTagihan({
      ...tagihan,
      idmodal: id,
    });
  };

  return (
    <>
      <div className="container px-5 h-screen">
        <Button
          className="bg-blue-400 my-4"
          onClick={() => navigate("create-rental")}
        >
          Rental Baru
        </Button>

        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 border">
            <Thead>
              {rental?.map((item, index) => (
                <Tablecom
                  idpl={item?.customer.idpl}
                  merek={item?.product.merekName.toUpperCase()}
                  end={item.endDate ? cvTime(item.endDate) : null}
                  start={item.startDate ? cvTime(item.startDate) : null}
                  no={item.customer.company}
                  customer={index + 1}
                  machine={item.product.sn.toUpperCase()}
                  duration={item.duration}
                  price={item.values.toLocaleString("id-ID")}
                  key={item._id}
                  onclick={() => navigate(`/update/${item._id}`)}
                  handleRemove={() => handleRemove(item._id)}
                  tarik={() => handleTarik(item._id)}
                  cust={item?.customer.keterangan}
                  mesin={item?.product.status}
                  link={item._id}
                  ket={
                    item?.keterangan === "init"
                      ? "Rental baru"
                      : item?.keterangan
                  }
                  tagihan={() => handlemodal(item._id)}
                />
              ))}
            </Thead>
          </table>
        </div>
      </div>
      <Modal
        title="Tambah Type mesin"
        open={open}
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
            onClick={addTagihan}
            className="mr-2 bg-blue-500 hover:text-slate-700"
          >
            Create
          </Button>,
        ]}
      >
        <Inputcomp
          name="pemakaian"
          title="Pemakaian"
          type="number"
          onchange={tagihanChange}
        />
        <Inputcomp
          name="tagihan"
          title="Tagihan"
          type="number"
          onchange={tagihanChange}
        />
      </Modal>
    </>
  );
};

export default ListRental;
