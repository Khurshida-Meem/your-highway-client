import React, { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Rating, TableHead, TablePagination, Tooltip } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import fetchPlaces from "../../../redux/places/thunk/fetch-places";
import deletePlace from "../../../redux/places/thunk/delete-place";
import UpdatePlace from "./update-place";

const Places = () => {
  const [open, setOpen] = useState(false);
  const [updateId, setUpdateId] = useState(null);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const placesData = useSelector((state) => state?.places?.places);
  const dispatch = useDispatch();

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
      dispatch(deletePlace(id));
    }
  };

  const handleClickOpen = (id) => {
    setOpen(true);
    setUpdateId(id);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    dispatch(fetchPlaces);
  }, [dispatch]);

  return (
    <>
      <Paper sx={{ width: "100%", overflow: "hidden" }}>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 500 }} aria-label="custom pagination table">
            <TableHead>
              <TableRow>
                <TableCell align="left">Image</TableCell>
                <TableCell align="left">Place</TableCell>
                <TableCell align="left">Country</TableCell>
                <TableCell align="left">Rating</TableCell>
                <TableCell align="left">Cost</TableCell>
                <TableCell align="left">Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {placesData
                ?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                ?.map((row) => (
                  <TableRow key={row._id}>
                    <TableCell align="left">
                      <img
                        src={row.thumb}
                        alt={row.destination}
                        height="50px"
                        width="100px"
                      />
                    </TableCell>
                    <TableCell align="left">{row.destination}</TableCell>
                    <TableCell align="left">{row.country}</TableCell>
                    <TableCell align="left">
                      <Rating
                        name="half-rating-read"
                        defaultValue={parseFloat(row.star)}
                        precision={0.5}
                        readOnly
                      />
                    </TableCell>
                    <TableCell align="left">$ {row.cost}</TableCell>
                    <TableCell align="left">
                      <Tooltip title="Delete">
                        <DeleteIcon
                          onClick={() => handleDelete(row._id)}
                          className="primary-text cursor-pointer"
                        />
                      </Tooltip>
                      <Tooltip title="Edit">
                        <EditIcon
                          onClick={() => handleClickOpen(row._id)}
                          className="primary-text cursor-pointer"
                        />
                      </Tooltip>
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25, 100]}
          component="div"
          count={placesData.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
      <UpdatePlace
        setOpen={setOpen}
        id={updateId}
        open={open}
        handleClose={handleClose}
      />
    </>
  );
};

export default Places;
