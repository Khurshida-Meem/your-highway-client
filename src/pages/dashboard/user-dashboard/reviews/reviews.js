import { Paper, Rating, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Tooltip } from '@mui/material';
import React, { useEffect } from 'react';
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { useDispatch, useSelector } from 'react-redux';
import { fetchReviewsData } from '../../../../redux/reviews/actions';

const AllReviews = ({data}) => {

    
    return (
      <TableContainer className='mt-5' component={Paper}>
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
            {data.map((row) => (
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
                    name="half-rating-read"
                    defaultValue={row.star}
                    precision={0.5}
                    readOnly
                  />
                </TableCell>
                <TableCell align="left">{row.comment}</TableCell>
                <TableCell align="left">
                  <Tooltip title="Delete">
                    <DeleteIcon className="primary-text cursor-pointer" />
                  </Tooltip>
                  <Tooltip title="Edit">
                    <EditIcon className="primary-text cursor-pointer" />
                  </Tooltip>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
};

export default AllReviews;