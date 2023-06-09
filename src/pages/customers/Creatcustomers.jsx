import React, { useState } from "react";
import CustForm from "../../components/form/CustForm";
import { API } from "../../config/api";
import moment from "moment/moment";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function Creatcustomers() {
  const [post, setPost] = useState();
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setPost({
      ...post,
      [e.target.name]:
        e.target.type === "file" ? e.target.files[0] : e.target.value,
    });
  };

  const changeStatus = (status) => {
    setPost({
      ...post,
      status: status,
    });
  };

  const changeKeterangan = (keterangan) => {
    setPost({
      ...post,
      keterangan: keterangan,
    });
  };

  const changeDate = (date, dateString) => {
    console.log(date, dateString);
    setPost({
      ...post,
      joinDate: moment(dateString).format("YYYY-MM-DD"),
    });
  };

  const create = async (e) => {
    e.preventDefault();
    if (!post.email) {
      return toast.error("Email is required");
    }

    const formData = new FormData();
    formData.append("address", post.address);
    formData.append("company", post.company);
    formData.append("email", post.email);
    formData.append("hp", post.hp);
    formData.append("idpl", post.idpl);
    formData.append("joinDate", post.joinDate);
    formData.append("kwitansi", post.kwitansi);
    formData.append("layanan", post.layanan);
    formData.append("name", post.name);
    formData.append("oha", post.oha);
    formData.append("sj", post.sj);
    formData.append("spk", post.spk);
    formData.append("status", post.status);
    try {
      setLoading(true);
      const res = await API.post("/customer/multi", formData);
      setLoading(false);
      toast.success("berhasli tambah data");
      setTimeout(() => {
        navigate("/customers");
      }, 1000);
    } catch (error) {
      toast.error(error.response.data.error.message);
      console.log(error);
      setLoading(false);
    }
  };

  console.log({ post });
  console.log("spk", post.spk);

  return (
    <>
      {loading ? (
        <p className="bg-white mx-auto text-center text-slate-700">
          Loading...
        </p>
      ) : (
        <div className="shadow-lg p-10 rounded-xl">
          <h1>Tambah Pelanggan</h1>
          <CustForm
            changeDate={changeDate}
            handleChange={handleChange}
            onchangeKeterangan={changeKeterangan}
            onchangeStatus={changeStatus}
          />
          <div className="flex justify-end max-w-lg">
            <button
              onClick={create}
              className="bg-blue-500 text-slate-200 py-2 px-4 rounded-md "
            >
              Submit
            </button>
          </div>
        </div>
      )}
    </>
  );
}
