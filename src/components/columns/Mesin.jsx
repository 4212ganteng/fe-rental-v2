import { Button } from "antd";
import moment from "moment";

export const Mesin = [
  {
    title: "No",
    key: "serial",
    render: (text, record, index) => index + 1,
  },
  {
    title: "Merek ",
    dataIndex: "merekName",
    key: "_id",
    render: (val) => <span>{val ? val.toUpperCase() : val}</span>,
  },

  {
    title: "Serial Number",
    dataIndex: "sn",
    key: "_id",
    render: (val) => <span>{val ? val.toUpperCase() : val}</span>,
  },
  {
    title: "Counter Awal",
    dataIndex: "startCounter",
    key: "_id",
    render: (val) => <span>{val ? val.toUpperCase() : val}</span>,
  },

  {
    title: "Jenis",
    dataIndex: "jenis",
    key: "_id",
    render: (val) => <span>{val ? val.toUpperCase() : val}</span>,
  },
  {
    title: "Tanggal Pembelian",
    dataIndex: "date",
    key: "_id",
    render: (value) => moment(value).format("DD/MM/YY"),
  },
  {
    title: "Biaya Overhoule",
    dataIndex: "overhole",
    key: "_id",
    render: (value) => <span>{`Rp ${value.toLocaleString("id-ID")}`}</span>,
  },

  {
    title: "Nilai Perolehan",
    dataIndex: "price",
    key: "_id",
    render: (value) => <span>{`Rp ${value.toLocaleString("id-ID")}`}</span>,
  },
  {
    title: "Status",
    dataIndex: "status",
    key: "_id",
  },
];
