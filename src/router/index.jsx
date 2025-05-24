import { BrowserRouter, Route, Routes } from "react-router";
// import Register from "../Components/Register";
// import Login from "@/Views/Login";

import Login from "../pages/Login";
import Home from "../pages/Home";
import CustomersList from "../pages/Customers";
import BaseLayout from "../layouts/BaseLayout";

function Private({ Item }) {
  const signed = false;

  return signed ? <Item /> : <Login />
};

const AppRouter = () => {
  return (
    <BrowserRouter>
      <>
        <Routes>
          {/* <Route exact path="/clientes" element={Private Item={}} /> */}
          <Route path="/login" element={<Login />} />

          {/* Wrap routes with layout */}
          <Route path="/" element={<BaseLayout />}>
            <Route index path="/" element={<Home />} />
            <Route exact path="/clientes" element={<CustomersList />} />
          </Route>

          {/* <Route exact path="/registrar" element={<Register />} /> */}
          {/* <Route path="*" element={<Login />} /> */}
        </Routes>
      </>
    </BrowserRouter>
  );
};

export default AppRouter;
