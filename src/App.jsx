import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "./App.css";
import Layouts from "./components/Layouts";
import ListCustomers from "./pages/customers/ListCustomers";
import Listmachine from "./pages/machine/Listmachine";
import CreateRent from "./pages/rental/CreateRent";
import EditRental from "./pages/rental/EditRental";
import ListRental from "./pages/rental/ListRental";
import SearchByCust from "./pages/trackmesin/SearchByCust";
import SearchBySn from "./pages/trackmesin/SearchBySn";
import Creatcustomers from "./pages/customers/Creatcustomers";
import CreateMesin from "./pages/machine/CreateMesin";

function App() {
  return (
    <BrowserRouter>
      <ToastContainer />
      <Layouts>
        <Routes>
          <Route path="/customers" element={<ListCustomers />} />
          <Route path="/add-cust" element={<Creatcustomers />} />

          <Route path="/mesin" element={<Listmachine />} />
          <Route path="add-mesin" element={<CreateMesin />} />

          <Route path="/create-rental" element={<CreateRent />} />
          <Route path="/update/:id" element={<EditRental />} />
          <Route path="/" element={<ListRental />} />
          <Route path="/track-sn" element={<SearchBySn />} />
          <Route path="/track-cust" element={<SearchByCust />} />
        </Routes>
      </Layouts>
    </BrowserRouter>
  );
}

export default App;
