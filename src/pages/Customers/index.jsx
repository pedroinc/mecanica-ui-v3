import { useState, useEffect } from "react";

import { AppBar, Box, Container, IconButton, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Toolbar, Typography } from "@mui/material";

import MenuIcon from '@mui/icons-material/Menu';

import { fetchCustomers } from "../../services";

export default function Customers() {

    const [customers, setCustomers] = useState([]);

    useEffect(() => {
        listCustomers();
    }, []);

    async function listCustomers() {
        const customers = await fetchCustomers();
        console.log(customers);
        setCustomers(customers);
    }

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
                    <Box sx={{ fontSize: 'h5.fontSize', margin: "16px 0" }}>Clientes</Box>

                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 650 }} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell>Nome</TableCell>
                                    <TableCell align="right">Telefone</TableCell>
                                    <TableCell align="right">E-mail</TableCell>
                                    <TableCell align="right">Data inclusão</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {customers.map((row) => (
                                    <TableRow
                                        key={row.id}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                        <TableCell component="th" scope="row">
                                            {row.name}
                                        </TableCell>
                                        <TableCell align="right">{row.phone}</TableCell>
                                        <TableCell align="right">{row.email}</TableCell>
                                        <TableCell align="right">{row.createdAt}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>

                    {/* <table>
                        <thead>
                            <tr>
                                <th>id</th>
                                <th>nome</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                customers.map(item => (
                                    <tr key={item.id}>
                                        <td>{item.id}</td>
                                        <td>{item.name}</td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table> */}
                </Container>
            </Box>
        </>
    );
}
