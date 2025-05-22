import '../styles/login.css';
import { useState } from "react";
import { Box, Button, Container, TextField } from "@mui/material";
import { loginRequest } from "../services";

export default function Login() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log("handleInput", name, value);
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmitEvent = (e) => {
    console.log('login!!!');
    e.preventDefault();
    if (!form.email || !form.password) alert("please provide a valid input");

    loginRequest(form.email, form.password);
  };

  return (
    <>
      <Box className="login-box">
        <Container className="login-container">
          {/* <h3>Login Page</h3> */}
          <Box sx={{ fontSize: 'h5.fontSize', margin: "16px 0" }}>Mecânica Cabrini</Box>
          <form>
            <div>
              <TextField
                label="email"
                type="text"
                name="email"
                id="email"
                onChange={handleChange}
                value={form.email}
              />
            </div>
            <div>
              <TextField
                label="senha"
                type="password"
                name="password"
                id="password"
                onChange={handleChange}
                value={form.password}
              />
            </div>
            <div>
              <Button 
              type="submit"
              sx={ { width: "100%", height: "3.2em" } }
              variant="outlined" 
              onClick={handleSubmitEvent}>
                Entrar
              </Button>
            </div>
          </form>
        </Container>
      </Box>
    </>
  );
}