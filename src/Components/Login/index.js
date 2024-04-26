import { useState } from "react";
import { loginRequest } from "../../services";
import { Button, TextField } from "@mui/material";

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
    e.preventDefault();
    if (!form.email || !form.password) alert("please provide a valid input");

    loginRequest(form.email, form.password);
  };

  return (
    <>
      <h3>Login page</h3>

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
          <Button type="submit" variant="outlined" onClick={handleSubmitEvent}>
            Entrar
          </Button>
        </div>
      </form>
    </>
  );
}
