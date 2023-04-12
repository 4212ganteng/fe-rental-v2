import { Select } from "antd";
import moment from "moment";
import React, { useEffect, useState } from "react";
import Tablecom from "../../components/Tablecom";
import { API } from "../../config/api";
import { toast } from "react-toastify";

export default function SearchByCust() {
  const [customer, setCustomer] = useState([]);
  const [rental, setRental] = useState();
  const [result, setResult] = useState([]);
  const [mesin, setMesin] = useState();
  const [mere, setMerek] = useState();
  const [loading, setLoading] = useState(false);

  const getCustomer = async () => {
    const response = await API.get(`/customer/`);
    setCustomer(response.data.data.customer);
  };

  const onSearch = (value) => {
    console.log("search:", value);
  };

  const onChange = (value) => {
    setRental({
      ...rental,
      customerId: value,
    });
  };
  console.log({ rental });
  const searchCust = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await API.get(`/rental/track/${rental.customerId}`);
      setMesin(response.data.findcust);
      setResult(response.data.historyCard);
      console.log("responseeeeeeeee", response);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      toast.error(error.response.data.message);
    }
  };

  useEffect(() => {
    getCustomer();
  }, []);

  console.log({ result });
  console.log({ mesin });
  console.log({ customer });

  return (
    <div className="">
      <div className=" h-screen w-full">
        <label
          htmlFor={name}
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Pilih Pelanggan
        </label>
        <Select
          className="w-full mb-3 "
          showSearch
          placeholder="Pilih Pelanggan"
          optionFilterProp="children"
          onChange={onChange}
          onSearch={onSearch}
          filterOption={(input, option) =>
            (option?.label ?? "").toLowerCase().includes(input.toLowerCase())
          }
          options={customer?.map((item, index) => ({
            label: item?.company?.toUpperCase(),
            value: item._id,
          }))}
          // value={rental?.customerId.toUpperCase()}
        />
        <button className="bg-red-600" onClick={searchCust}>
          search
        </button>

        {/* -------------*/}
        <div>
          {result.length <= 0 ? (
            <img
              src="http://www.clipartbest.com/cliparts/4ib/6y9/4ib6y9erT.gif"
              alt=""
              className="mx-auto"
            />
          ) : (
            <div>
              {/* mesin detail */}
              <h2 className="text-center text-lg font-semibold font-sans my-3">
                Mesin Detail
              </h2>
              <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                  <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                      <th scope="col" className="px-6 py-3">
                        Merek
                      </th>
                      <th scope="col" className="px-6 py-3">
                        No Seri
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Tanggal Perolehan
                      </th>

                      <th scope="col" className="px-6 py-3">
                        Jenis
                      </th>

                      {/* <th scope="col" className="px-6 py-3">
                    <span className="">Actions</span>
                  </th> */}
                    </tr>
                  </thead>
                  <tbody>
                    {result?.map((item) => (
                      <Tablecom
                        customer={item.product.merek}
                        machine={item.product.sn}
                        duration={moment(item.date).format("MMMM Do YYYY")}
                        price={item.product.jenis}
                        key={item.product._id}
                        edit={true}
                      />
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
