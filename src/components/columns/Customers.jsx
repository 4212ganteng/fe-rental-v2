import moment from "moment";

export const Customers = [
  {
    title: "No.",
    key: "serial",
    render: (text, record, index) => index + 1,
  },
  {
    title: "ID Pelanggan",
    dataIndex: "idpl",
    render: (text) => <span>{text ? text.toUpperCase() : text}</span>,
  },
  {
    title: "Pelanggan",
    dataIndex: "company",
    render: (text) => <span>{text ? text.toUpperCase() : text}</span>,
  },
  {
    title: "Tanggal Gabung",
    dataIndex: "joinDate",
    render: (val) => {
      return moment(val).format("YYYY-MM-DD");
    },
  },
  {
    title: "Nama PIC",
    dataIndex: "name",
    render: (text) => <span>{text ? text.toUpperCase() : text}</span>,
  },
  {
    title: "No Telephone",
    dataIndex: "hp",
    // render: (text) => <span>{text ? text.toUpperCase() : text}</span>,
  },
  {
    title: "Email",
    dataIndex: "email",
    render: (text) => <span>{text ? text.toUpperCase() : text}</span>,
  },
  {
    title: "Status",
    dataIndex: "status",
    // render: (text) => <span>{text ? text.toUpperCase() : text}</span>,
  },
  {
    title: "Keterangan",
    dataIndex: "keterangan",
    // render: (text) => <span>{text ? text.toUpperCase() : text}</span>,
  },
  {
    title: "Alamat",
    dataIndex: "address",
    render: (text) => <span>{text ? text.toUpperCase() : text}</span>,
  },
];
