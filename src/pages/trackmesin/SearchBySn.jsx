import React, { useState } from "react";
import { API } from "../../config/api";
import { Space, Table, Tag } from "antd";
import { toast } from "react-toastify";
import Tablecom from "../../components/Tablecom";
import moment from "moment";
const { Column, ColumnGroup } = Table;

export default function SearchBySn() {
  const [search, setSearch] = useState();
  const [result, setResult] = useState([]);
  const [mesin, setMesin] = useState();
  const [loading, setLoading] = useState(false);

  const searchSN = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await API.get(`/rental/mesin/${search}`);
      console.log("response", response);
      setMesin(response.data.findSn);
      setResult(response.data.historyCard);
      setLoading(false);

      console.log({ response });
    } catch (error) {
      setLoading(false);
      toast.error(error.response.data.message);
    }
  };
  const date = moment(mesin?.date).format("MMM Do YY");
  console.log({ mesin });
  console.log({ date });
  return (
    <>
      <div className="h-screen">
        {/* background */}
        <h2 className="text-center text-3xl font-semibold font-sans my-3">
          Tracking Serial Number
        </h2>
        <form className="flex items-center">
          <label for="simple-search" className="sr-only">
            Search
          </label>
          <div className="relative w-full">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg
                aria-hidden="true"
                className="w-5 h-5 text-gray-500 dark:text-gray-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </div>
            <input
              type="text"
              id="simple-search"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search"
              required
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <button
            className="p-2.5 ml-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            onClick={searchSN}
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              ></path>
            </svg>
            <span className="sr-only">Search</span>
          </button>
        </form>

        {/* table */}
        <div>
          {loading ? (
            <p className="text-center"> sabar... Loading cuy..</p>
          ) : null}
        </div>
        <div>
          {result.length <= 0 ? (
            <img
              src="http://www.clipartbest.com/cliparts/4ib/6y9/4ib6y9erT.gif"
              alt=""
              className="mx-auto"
            />
          ) : (
            <div>
              <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                  <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                      <th scope="col" className="px-6 py-3">
                        #
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Pelanggan
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Durasi
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Harga
                      </th>
                      {/* <th scope="col" className="px-6 py-3">
                    <span className="">Actions</span>
                  </th> */}
                    </tr>
                  </thead>
                  <tbody>
                    {result?.map((item, index) => (
                      <Tablecom
                        customer={index + 1}
                        machine={item.customer.map((data) => data.company)}
                        duration={item.duration}
                        price={item.values.toLocaleString("id-ID")}
                        key={item._id}
                        show={true}
                      />
                    ))}
                  </tbody>
                </table>
              </div>

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
                    <Tablecom
                      customer={mesin?.merek?.typeMesin}
                      machine={mesin?.sn}
                      duration={date}
                      price={mesin.jenis}
                      key={mesin._id}
                      edit={true}
                    />
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}