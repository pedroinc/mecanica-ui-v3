import { useState, useEffect } from "react";
import { fetchCustomers } from '../services'
import { Box, Button, Container } from "@mui/material";

async function listCustomers() {
  const customers = await fetchCustomers();
  console.log(customers);
}

export default function Home() {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    console.log('useEffect')
    listCustomers();
    // console.log()
  }, []);

  return (
    <Box sx={{ fontSize: 'h5.fontSize', margin: "16px 0" }}>Homepage - pipeline test v1.0</Box>
  );
}
