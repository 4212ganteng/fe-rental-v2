import moment from "moment";

export const Customers = [
  {
    title: "No.",

    key: "serial",
    render: (text, record, index) => index + 1,
  },
  {
    title: "ID Pelanggan",
    key: "_id",
    dataIndex: "idpl",
    render: (text) => <span>{text ? text.toUpperCase() : text}</span>,
  },
  {
    title: "Pelanggan",
    key: "_id",
    dataIndex: "company",
    width: "40%",
    render: (text) => <span>{text ? text.toUpperCase() : text}</span>,
  },
  {
    title: "Tanggal Gabung",
    key: "_id",
    dataIndex: "joinDate",
    render: (val) => {
      return moment(val).format("YYYY-MM-DD");
    },
  },
  {
    title: "Nama PIC",
    key: "_id",
    dataIndex: "name",
    render: (text) => <span>{text ? text.toUpperCase() : text}</span>,
  },
  {
    title: "No Telephone",
    key: "_id",
    dataIndex: "hp",
    // render: (text) => <span>{text ? text.toUpperCase() : text}</span>,
  },
  {
    title: "Email",
    key: "_id",
    dataIndex: "email",
    render: (text) => <span>{text ? text.toUpperCase() : text}</span>,
  },
  {
    title: "Status",
    key: "_id",
    dataIndex: "status",
    // render: (text) => <span>{text ? text.toUpperCase() : text}</span>,
  },
  {
    title: "Keterangan",
    key: "_id",
    dataIndex: "keterangan",
    // render: (text) => <span>{text ? text.toUpperCase() : text}</span>,
  },
  {
    title: "Alamat",
    key: "_id",
    dataIndex: "address",
    render: (text) => <span>{text ? text.toUpperCase() : text}</span>,
  },
];
