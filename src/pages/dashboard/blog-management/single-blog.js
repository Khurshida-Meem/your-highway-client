import { TableCell, TableRow, Tooltip } from "@mui/material";
import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import VisibilityIcon from "@mui/icons-material/Visibility";

const SingleBlog = ({ row }) => {
  return (
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
          <DeleteIcon className="primary-text cursor-pointer" />
        </Tooltip>
        <Tooltip title="View">
          <VisibilityIcon className="primary-text cursor-pointer" />
        </Tooltip>
      </TableCell>
    </TableRow>
  );
};

export default SingleBlog;
