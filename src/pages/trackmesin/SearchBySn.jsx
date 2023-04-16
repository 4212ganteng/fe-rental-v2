import { Table } from "antd";
import moment from "moment";
import React, { useState } from "react";
import { toast } from "react-toastify";
import Tabledetail from "../../components/Tabledetail";
import { track } from "../../components/columns/TrackSn";
import { API } from "../../config/api";
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
  console.log({ result });
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
            <p>silahkan search di atas</p>
          ) : (
            <div>
              <div>
                <Table columns={track} dataSource={result} />
              </div>

              {/* mesin detail */}
              <h2 className="text-center text-lg font-semibold font-sans my-3">
                Mesin Detail
              </h2>

              <div>
                <Tabledetail>
                  <tr class="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                    <td class="px-6 py-4">{mesin.merekName}</td>
                    <td class="px-6 py-4">{mesin.sn}</td>
                    <td class="px-6 py-4">
                      {moment(mesin?.date).format("DD/MM/YY")}
                    </td>
                  </tr>
                </Tabledetail>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
