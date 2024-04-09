import React from 'react'
import { Button,
         Table, 
         TableHead, 
         TableBody, 
         TableRow, 
         TableCell,
         Paper,
         TableContainer,
         Container } from '@mui/material';
import { MarkEmailUnread } from '@mui/icons-material';
import BasicMenu from './BasicMenu';

const Import = (props) => {
    return (
        <div>
            <Container>
            <br></br>
            <Button onClick={ props.fetchMakes } variant="contained" color="primary">Import</Button>
            <br></br><br></br>
            <h2>Count: {props.makes.length}</h2>
            <br></br><br></br>
            <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                <TableRow>
                    <TableCell>ID</TableCell>
                    <TableCell align="right">Make</TableCell>
                    <TableCell align="right">Actions</TableCell>
                </TableRow>
                </TableHead>
                <TableBody>
                {props.makes.map((make, index) => (
                    <TableRow
                    key={make.MakeId}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                    <TableCell component="th" scope="make">
                        {make.MakeId}
                    </TableCell>
                    <TableCell align="right">{make.MakeName}</TableCell>
                    <TableCell align="right">
                        <BasicMenu key={index} deleteMake={props.deleteMake}></BasicMenu>
                    </TableCell>
                    </TableRow>
                ))}
                </TableBody>
            </Table>
            </TableContainer>
            </Container>
        </div>
    )
}

export default Import