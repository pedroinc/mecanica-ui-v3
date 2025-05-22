import { BrowserRouter, Route, Routes } from "react-router";
// import Register from "../Components/Register";
// import Login from "@/Views/Login";

import Login from "../pages/Login";
import Home from "../pages/Home";
import Customers from "../pages/Customers";

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
          <Route exact path="/clientes" element={<Customers />} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Home />} />
          {/* <Route exact path="/registrar" element={<Register />} /> */}
          <Route path="*" element={<Login />} />
        </Routes>
      </>
    </BrowserRouter>
  );
};

export default AppRouter;
