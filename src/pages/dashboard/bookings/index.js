import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow } from '@mui/material';
import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import useAuth from '../../../hooks/useAuth';
import { THUNK_SERVER } from '../../../redux/server';
import DeleteIcon from "@mui/icons-material/Delete";


const Bookings = () => {

    const [bookings, setBookings] = useState([]);
    const {firebaseContext} = useAuth();
    const {user, admin} = firebaseContext;

    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);

    const selectedBookings = bookings.filter(
      (booking) => booking.email === user.email
    );

    const handleChangePage = (event, newPage) => {
      setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
      setRowsPerPage(+event.target.value);
      setPage(0);
    };

    const handleDelete = (id) => {
      const proceed = window.confirm("Are you sure, you want to delete?");
      if (proceed) {
        axios.delete(THUNK_SERVER + "bookings/" + id);
      }
    };

    useEffect(() => {
      fetch(THUNK_SERVER + "bookings")
        .then((res) => res.json())
        .then((data) => setBookings(data));
    }, [bookings]);

    return (
      <Paper sx={{ width: "100%", overflow: "hidden" }}>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 500 }} aria-label="custom pagination table">
            <TableHead>
              <TableRow>
                <TableCell align="left">Name</TableCell>
                <TableCell align="left">Email</TableCell>
                <TableCell align="left">Contact</TableCell>
                <TableCell align="left">Country</TableCell>
                <TableCell align="left">Place</TableCell>
                <TableCell align="left">Hotel</TableCell>
                <TableCell align="left">Room</TableCell>
                <TableCell align="left">Check In</TableCell>
                <TableCell align="left">Check Out</TableCell>
                <TableCell align="left">Submission</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {(admin ? bookings : selectedBookings)
                ?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                ?.map((row) => (
                  <TableRow key={row._id}>
                    <TableCell align="left">{row?.name}</TableCell>
                    <TableCell align="left">{row?.email}</TableCell>
                    <TableCell align="left">{row?.contact}</TableCell>

                    <TableCell align="left">{row?.country}</TableCell>
                    <TableCell align="left">{row?.place}</TableCell>
                    <TableCell align="left">{row?.hotel_name}</TableCell>
                    <TableCell align="left">{row?.room_type}</TableCell>
                    <TableCell align="left">{row?.check_in}</TableCell>
                    <TableCell align="left">{row?.check_out}</TableCell>
                    <TableCell align="left">{row?.date}</TableCell>
                    <TableCell align="left">
                      <DeleteIcon
                        onClick={() => handleDelete(row._id)}
                        className="primary-text cursor-pointer"
                      />
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25, 100]}
          component="div"
          count={(admin ? bookings : selectedBookings).length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    );
};

export default Bookings;