import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  Tooltip,
} from "@mui/material";
import React, { useEffect } from "react";
import useAuth from "../../../hooks/useAuth";
import DeleteIcon from "@mui/icons-material/Delete";
import { useDispatch, useSelector } from "react-redux";
import fetchComments from "../../../redux/comments/thunk/fetch-comments";
import deleteComment from "../../../redux/comments/thunk/delete-comment";

const Comments = () => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const dispatch = useDispatch();

  const { firebaseContext } = useAuth();
  const { user, admin } = firebaseContext;

  const comments = useSelector((state) => state.comments.comments);

  const selectedComments = comments.filter(
    (comment) => comment.email === user.email
  );

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  useEffect(() => {
    dispatch(fetchComments);
  }, [dispatch]);

  const handleDelete = (id) => {
    const proceed = window.confirm("Are you sure, you want to delete?");
    if (proceed) {
      dispatch(deleteComment(id));
    }
  };

  const handleLinkClick = (id) => {
    window.open("/places/" + id, "_blank");
  };

  return (
    <Paper sx={{ width: "100%", overflow: "hidden" }}>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 500 }} aria-label="custom pagination table">
          <TableHead>
            <TableRow>
              <TableCell align="left">Name</TableCell>
              <TableCell align="left">Email</TableCell>
              <TableCell align="left">Comment</TableCell>
              <TableCell align="left">Link</TableCell>
              <TableCell align="left">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {(admin ? comments : selectedComments)
              ?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              ?.map((row) => (
                <TableRow key={row._id}>
                  <TableCell align="left">{row?.name}</TableCell>
                  <TableCell align="left">{row?.email}</TableCell>
                  <TableCell align="left">{row?.comment}</TableCell>
                  <TableCell align="left">
                    <span
                      onClick={() => handleLinkClick(row?.placeId)}
                      className="text-decoration-underline primary-text cursor-pointer"
                    >
                      view comment
                    </span>
                  </TableCell>
                  <TableCell align="left">
                    <Tooltip title="Delete">
                      <DeleteIcon
                        onClick={() => handleDelete(row._id)}
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
        count={admin ? comments.length : selectedComments.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
};

export default Comments;
