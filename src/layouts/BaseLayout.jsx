// src/layouts/BaseLayout.jsx
import { AppBar, Box, Button, Container, Drawer, IconButton, Toolbar, Typography } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import { Outlet } from "react-router-dom";
import { useState } from "react";

const BaseLayout = () => {

    const [open, setOpen] = useState(false);

    const toggleDrawer = (newOpen) => () => {
        setOpen(newOpen);
    };

    return (
        <>
            {/* <header className="bg-blue-600 text-white p-4">My App Header</header> */}

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
                    <main>
                        <Outlet /> {/* This is where nested routes will be rendered */}
                        {/* <Outlet context={myContextValue} /> This is where nested routes will be rendered */}
                    </main>
                </Container>

                <Drawer open={open} anchor="bottom" onClose={toggleDrawer(false)}>
                    <Container sx={{ display: "flex", flexDirection: "column", width: "100%", height: "100hv" }}>
                        <div>item 1</div>
                        <div>item 1</div>
                        <div>item 1</div>
                        <div>item 1</div>
                        <div>item 1</div>
                    </Container>
                </Drawer>
            </Box>

            {/* <Button onClick={toggleDrawer(true)}>Open drawer</Button> */}


            {/* <footer className="bg-gray-200 text-center p-4">
                My App Footer
            </footer> */}
        </>
    );
};

export default BaseLayout;