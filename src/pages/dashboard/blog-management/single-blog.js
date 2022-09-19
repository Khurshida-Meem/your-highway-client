import { TableCell, TableRow, Tooltip } from "@mui/material";
import React, { useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import VisibilityIcon from "@mui/icons-material/Visibility";
import useAuth from "../../../hooks/useAuth";
import ApproveBlog from "./approve-blog";
import { useDispatch } from "react-redux";
import deleteBlog from "../../../redux/blogs/thunk/delete-blog";

const SingleBlog = ({ row }) => {

  const { firebaseContext } = useAuth();
  const { admin } = firebaseContext;
  const [open, setOpen] = useState(false);
  const [updateId, setUpdateId] = useState(null);
  const dispatch = useDispatch();

  const handleClickOpen = (id) => {
    setOpen(true);
    setUpdateId(id);
  };

  const handleDelete = id => {
    const proceed = window.confirm("Are you sure, you want to delete?");
    if (proceed) {
      dispatch(deleteBlog(id));
    }
  }

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <TableRow key={row._id}>
        <TableCell align="left">
          <img src={row?.thumb} alt="Pic" height="50px" width="100px" />
        </TableCell>
        <TableCell align="left">{row?.username}</TableCell>
        <TableCell align="left">{row?.email}</TableCell>
        <TableCell align="left">{row?.title}</TableCell>
        <TableCell align="left">{row?.category}</TableCell>
        <TableCell align="left">{row?.status}</TableCell>
        <TableCell align="left">
          <Tooltip title="Delete">
            <DeleteIcon onClick={() => handleDelete(row?._id)} className="primary-text cursor-pointer" />
          </Tooltip>
          <Tooltip title="View">
            <VisibilityIcon
              onClick={() => handleClickOpen(row._id)}
              className="primary-text cursor-pointer"
            />
          </Tooltip>
        </TableCell>
      </TableRow>

      {admin && (
        <ApproveBlog
          setOpen={setOpen}
          id={updateId}
          open={open}
          handleClose={handleClose}
        />
      )}
    </>
  );
};

export default SingleBlog;
