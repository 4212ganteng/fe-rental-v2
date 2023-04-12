export const track = [
  {
    title: "#",
    key: "serial",
    render: (text, record, index) => index + 1,
  },
  {
    title: "Pelanggan",
    dataIndex: "customer",
    render: (customer) => customer.company,
  },
  {
    title: "Durasi",
    dataIndex: "duration",
  },
  {
    title: "Price",
    dataIndex: "values",
  },
  {
    title: "Awal sewa",
    dataIndex: "startDate",
  },
  {
    title: "Akhir sewa",
    dataIndex: "endDate",
  },
];
