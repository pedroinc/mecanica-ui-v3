import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from "../Components/Register";
import Login from "../Components/Login";

// function Private({ Item }) {
//   const signed = false;

//   return signed ? <Item /> : <Login />
// };

const AppRouter = () => {
  return (
    <BrowserRouter>
      <>
        <Routes>
          {/* <Route exact path="/clientes" element={Private Item={}} /> */}
          <Route path="/" element={<Login />} />
          <Route exact path="/registrar" element={<Register />} />
          <Route path="*" element={<Login />} />
        </Routes>
      </>
    </BrowserRouter>
  );
};

export default AppRouter;
