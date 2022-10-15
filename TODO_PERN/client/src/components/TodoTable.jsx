import React from 'react'
import { IconButton, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const TodoTable = ({ rows, handleEdit, handleDelete }) => {
    return (
        <TableContainer sx={{ maxHeight: 600 }} component={Paper} elevation={2}>
            <Typography variant='h5' style={{ marginBottom: "1rem", paddingTop: "1rem" }} align="center">Your Todos</Typography>
            <hr />
            <Table sx={{ minWidth: 650 }} stickyHeader aria-label="sticky table">
                <TableHead>
                    <TableRow>
                        <TableCell>Task Id</TableCell>
                        <TableCell align="left">Task Description</TableCell>
                        <TableCell align="center">Creation Date</TableCell>
                        <TableCell align="center">Action</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows?.map((row) => (
                        <TableRow
                            key={row.todo_id}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row" >
                                {row.todo_id}
                            </TableCell>
                            <TableCell component="th" scope="row">
                                {row.description}
                            </TableCell>
                            <TableCell align="center" component="th" scope="row">
                                {row.createdat.split("T")[0]}
                            </TableCell>
                            <TableCell align="center">
                                <IconButton aria-label="delete" size="large" onClick={() => handleEdit(row.todo_id)}>
                                    <EditIcon fontSize="inherit" color='primary' />
                                </IconButton>
                                <IconButton aria-label="delete" size="large" onClick={() => handleDelete(row.todo_id)}>
                                    <DeleteIcon fontSize="inherit" color='warning' />
                                </IconButton>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default TodoTable