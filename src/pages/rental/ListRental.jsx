import { Button } from "antd";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { API } from "../../config/api";
import Tablecom from "../../components/Tablecom";

const ListRental = () => {
  const [rental, setrental] = useState([]);
  const [open, setOpen] = useState(false);
  const [openedit, setOpenedit] = useState(false);
  const [idexUpdate, setIndexUpdate] = useState();
  const [update, setupdate] = useState();
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
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Pelanggan
                </th>
                <th scope="col" className="px-6 py-3">
                  Mesin
                </th>
                <th scope="col" className="px-6 py-3">
                  Durasi
                </th>
                <th scope="col" className="px-6 py-3">
                  Harga
                </th>
                <th scope="col" className="px-6 py-3">
                  <span className="">Actions</span>
                </th>
              </tr>
            </thead>
            <tbody>
              {rental?.map((item, index) => (
                <Tablecom
                  customer={item.customer.company}
                  machine={item.product.sn.toUpperCase()}
                  duration={item.duration}
                  price={item.values.toLocaleString("id-ID")}
                  key={item._id}
                  onclick={() => navigate(`/update/${item._id}`)}
                  handleRemove={() => handleRemove(item._id)}
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default ListRental;
