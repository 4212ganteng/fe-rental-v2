import { Table, Button } from "antd";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Mesin } from "../../components/columns/Mesin";
import { API } from "../../config/api";

export default function List() {
  const [sell, setSell] = useState();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

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

  useEffect(() => {
    statusSell();
  }, []);
  return (
    <div>
      <div className="container px-5 h-screen">
        <Button
          className="bg-blue-400 my-4"
          onClick={() => navigate("/add-sale")}
        >
          Tambah Sales
        </Button>

        <Table columns={Mesin} dataSource={sell} />
      </div>
    </div>
  );
}
