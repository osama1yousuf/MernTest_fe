import "./App.css";
import Layout from "./components/layout/Layout";
import { Routes, Route } from "react-router-dom";
import { Customers } from "./view/customer/Customers";
import { CreateCustomer } from "./view/customer/CreateCustomer";
import { UpdateCustomer } from "./view/customer/UpdateCustomer";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<Customers />} />
          <Route path="/customer/create" element={<CreateCustomer />} />
          <Route path="/customer/edit/:id" element={<UpdateCustomer />} />
        </Routes>
        <ToastContainer />
      </Layout>
    </>
  );
}

export default App;
