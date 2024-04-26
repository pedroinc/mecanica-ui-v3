import React, { useEffect, useState } from "react";
import "./App.css";
import AppRouter from "./router";
import { fetchCustomers, logout } from "./services";
import CssBaseline from "@mui/material/CssBaseline";
import { Button } from "@mui/material";

async function listCustomers() {
  const customers = await fetchCustomers();
  console.log(customers);
}

function handleLogout() {
  logout();
}

const App = () => {
  useEffect(() => {
    listCustomers();
  }, []);

  return (
    <React.Fragment>
      <CssBaseline />
      <div className="App">
        <header className="App-header">
          <h3>App header</h3>
          <Button variant="text" onClick={handleLogout}>
            sair
          </Button>
        </header>
        <body>
          <div className="wrapper">
            <AppRouter />
          </div>
        </body>
      </div>
    </React.Fragment>
  );
};

export default App;
