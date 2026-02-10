import { useState, useEffect } from "react";

import { AppBar, Box, Container, IconButton, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Toolbar, Typography } from "@mui/material";


import MenuIcon from '@mui/icons-material/Menu';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import SearchIcon from '@mui/icons-material/Search';

import { fetchCustomers } from "../../services";

export default function CustomersList() {

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

                    <Box
                        sx={{ fontSize: 'h5.fontSize', margin: "16px 0" }}>
                        <div>Clientes</div>
                    </Box>

                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 650 }} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell>Nome</TableCell>
                                    <TableCell align="right">Telefone</TableCell>
                                    <TableCell align="right">Data inclusão</TableCell>
                                    <TableCell align="right"></TableCell>
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
                                        <TableCell align="right">{row.createdAt}</TableCell>
                                        <TableCell align="right">
                                            <IconButton aria-label="" size="small">
                                                <SearchIcon />
                                            </IconButton>                                            
                                            <IconButton aria-label="" size="small">
                                                <EditIcon />
                                                {/* <UpdateIcon /> */}
                                            </IconButton>
                                            <IconButton aria-label="" size="small">
                                                <DeleteIcon />
                                            </IconButton>
                                        </TableCell>
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
        </>
    );
}
