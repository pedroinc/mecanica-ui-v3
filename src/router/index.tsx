import type { ComponentType } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Login from '../pages/Login';
import Home from '../pages/Home';
import CustomersList from '../pages/Customers';
import NotFound from '../pages/Shared/NotFound';
import BaseLayout from '../layouts/BaseLayout';

function Private({ Item }: { Item: ComponentType }) {
  const signed = true;

  return signed ? <Item /> : <Login />;
}

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route exact path="/clientes" element={Private Item={}} /> */}
        <Route path="/login" element={<Login />} />

        {/* Wrap routes with layout */}
        <Route path="/" element={<BaseLayout />}>
          <Route index path="/" element={<Home />} />
          <Route
            path="/clientes"
            element={<Private Item={CustomersList} />}
          />
        </Route>

        {/* <Route exact path="/registrar" element={<Register />} /> */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
