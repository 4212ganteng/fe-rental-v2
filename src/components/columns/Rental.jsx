import moment from "moment";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { API } from "../../config/api";

const handleTarik = async (id) => {
  try {
    let answer = window.confirm(
      "tarik mesin akan merubah status mesin dan pelanggan menjadi off"
    );
    if (answer) {
      const response = await API.patch(`/rental/tarik/${id}`);
      get();
      toast.success("berhasil berhasil tarik mesin");
    }
  } catch (error) {
    console.log(error);
    toast.error(error.response.data.error.message);
  }
};

export const Rental = [
  {
    title: "No",
    key: "serial",
    render: (text, record, index) => index + 1,
  },
  {
    title: "ID Pelanggan",
    key: "_id",
    dataIndex: "customer",
    render: (val) => (
      <span>{val.idpl ? val?.idpl?.toUpperCase() : val.idpl}</span>
    ),
  },
  {
    title: "Pelanggan",
    key: "_id",
    dataIndex: "customer",

    render: (val) => (
      <span>{val.company ? val?.company?.toUpperCase() : val.company}</span>
    ),
  },
  {
    title: "Merek ",
    dataIndex: "product",
    key: "_id",
    render: (val) => (
      <span>
        {val.merekName ? val?.merekName?.toUpperCase() : val.merekName}
      </span>
    ),
  },

  {
    title: "Serial Number",
    dataIndex: "product",
    key: "_id",
    render: (val) => <span>{val.sn ? val?.sn?.toUpperCase() : val.sn}</span>,
  },
  {
    title: "Durasi",
    dataIndex: "duration",
    key: "_id",
    render: (val) => <span>{val}Tahun</span>,
  },
  {
    title: "Awal Rental",
    dataIndex: "startDate",
    key: "_id",
    render: (value) => moment(value).format("DD/MM/YY"),
  },
  {
    title: "Akhir Rental",
    dataIndex: "endDate",
    key: "_id",
    render: (value) => moment(value).format("DD/MM/YY"),
  },
  {
    title: "Harga",
    dataIndex: "values",
    key: "_id",
    render: (value) => <span>{`Rp ${value.toLocaleString("id-ID")}`}</span>,
  },
  {
    title: "Keterangan",
    dataIndex: "keterangan",
    key: "_id",
    render: (val) => (
      <span>{val == "init" ? "rental baru".toUpperCase() : val}</span>
    ),
  },
  {
    title: "Actions",
    dataIndex: "_id",
    key: "_id",
    render: (value) => (
      <div>
        <button
          className="mr-3 mb-3 bg-sky-500 rounded-lg px-4 py-1 text-white hover:bg-sky-600"
          onClick={() => handleTarik(value)}
        >
          Tarik Mesin
        </button>

        <Link to={`/update/${value}`}>
          <button className="mr-3 bg-sky-500 rounded-md px-2 py-1 text-slate-100 hover:bg-sky-600">
            UpDowngrade
          </button>
        </Link>
      </div>
    ),
  },
];
