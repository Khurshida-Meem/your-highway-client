import {
  Paper,
  Rating,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Tooltip,
} from "@mui/material";
import React, { useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import { useDispatch, useSelector } from "react-redux";
import { deleteReview } from "../../../../redux/reviews/actions";
import useAuth from "../../../../hooks/useAuth";
import EditIcon from "@mui/icons-material/Edit";
import UpdateReview from "./update-review";

const AllReviews = () => {
  const [open, setOpen] = useState(false);
  const [updateId, setUpdateId] = useState(null)
  const dispatch = useDispatch();
  const { firebaseContext } = useAuth();
  const { user, admin } = firebaseContext;
  const reviewsData = useSelector((state) => state?.reviews?.data);
  const filtered = reviewsData?.filter((data) => data?.email === user?.email);

  const handleReviewDelete = (id) => {
    const proceed = window.confirm("Are you sure, you want to delete?");
    if (proceed) {
      dispatch(deleteReview(id));
    }
  };
 
  const handleClickOpen = (id) => {
    setOpen(true);
    setUpdateId(id);
  };

  const handleClose = () => {
    setOpen(false);
  };

  
  return (
    <>
      <TableContainer className="mt-5" component={Paper}>
        <Table sx={{ minWidth: 500 }} aria-label="custom pagination table">
          <TableHead>
            <TableRow>
              <TableCell align="left">Image</TableCell>
              <TableCell align="left">Name</TableCell>
              <TableCell align="left">Email</TableCell>
              <TableCell align="left">Designation</TableCell>
              <TableCell align="left">Star</TableCell>
              <TableCell align="left">Comment</TableCell>
              <TableCell align="left">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {(admin ? reviewsData : filtered)?.map((row) => (
              <TableRow key={row._id}>
                <TableCell align="left">
                  <img
                    className="rounded-circle"
                    src={row.img}
                    alt={row.name}
                    height="30px"
                  />
                </TableCell>
                <TableCell align="left">{row.name}</TableCell>
                <TableCell align="left">{row.email}</TableCell>
                <TableCell align="left">{row.designation}</TableCell>
                <TableCell align="left">
                  <Rating
                    name="rating-read"
                    defaultValue={parseInt(row?.star)}
                    readOnly
                  />
                </TableCell>
                <TableCell align="left">{row.comment}</TableCell>
                <TableCell align="left">
                  <Tooltip title="Delete">
                    <DeleteIcon
                      onClick={() => handleReviewDelete(row._id)}
                      className="primary-text cursor-pointer"
                    />
                  </Tooltip>
                  {admin || (
                    <Tooltip title="Edit">
                      <EditIcon
                        onClick={() => handleClickOpen(row._id)}
                        className="primary-text cursor-pointer"
                      />
                    </Tooltip>
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <div>
        <UpdateReview id={updateId} open={open} handleClose={handleClose} />
      </div>
    </>
  );
};

export default AllReviews;
