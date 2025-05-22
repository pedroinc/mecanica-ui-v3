import { useState, useEffect } from "react";
import { fetchCustomers } from '../services'
import { AppBar, Box, Button, Container, IconButton, Toolbar, Typography } from "@mui/material";
// import { MenuIcon } from "@mui/icons-material";
import MenuIcon from '@mui/icons-material/Menu';

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
    <>
      <Box className="base-box">
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Mecânica
            </Typography>
            {/* <Button color="inherit">Login</Button> */}
          </Toolbar>
        </AppBar>
        <Container className="base-container">
          <Box sx={{ fontSize: 'h5.fontSize', margin: "16px 0" }}>Homepage</Box>
        </Container>
      </Box>
    </>
  );
}
