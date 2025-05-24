import { useState, useEffect } from "react";
import { fetchCustomers } from '../services'
import { Box, Container } from "@mui/material";

async function listCustomers() {
  const customers = await fetchCustomers();
  console.log(customers);
}

export default function Home() {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    listCustomers();
  }, []);

  return (
    <Box sx={{ fontSize: 'h5.fontSize', margin: "16px 0" }}>Homepage</Box>
  );
}
