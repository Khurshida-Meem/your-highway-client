import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import approveBlog from "../../../redux/blogs/thunk/approve-blog";
import fetchBlogs from "../../../redux/blogs/thunk/fetch-blogs";

const ApproveBlog = ({ id, open, handleClose, setOpen }) => {
  const BlogsData = useSelector((state) => state?.blogs?.blogs);
  const dispatch = useDispatch();

  const filtered = BlogsData?.filter((data) => data?._id === id);

  const descriptionElementRef = React.useRef(null);
  React.useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);

  const onStatusChanged = (status) => {
    dispatch(approveBlog(id,status))
    alert(`blog ${status} successfully`);
    setOpen(false);
  };

  useEffect(() => {
    dispatch(fetchBlogs);
  }, [dispatch]);

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      scroll={"paper"}
      aria-labelledby="scroll-dialog-title"
      aria-describedby="scroll-dialog-description"
    >
      <DialogTitle id="scroll-dialog-title">Approve/Reject Blog</DialogTitle>
      <DialogContent>
        <h4>{filtered[0]?.username}</h4>
        <p>{filtered[0]?.date}</p>
        <p className="h6">{filtered[0]?.blog}</p>

        <div className="mt-4">
          {filtered[0]?.status === "Pending" && (
            <>
              <button
                onClick={() => onStatusChanged("Approved")}
                className="button px-3 py-2 green-bg me-4"
              >
                Approve
              </button>
              <button
                onClick={() => onStatusChanged("Rejected")}
                className="button px-3 py-2 red-bg me-4"
              >
                Reject
              </button>
            </>
          )}
          {filtered[0]?.status === "Approved" && (
            <>
              <button
                onClick={() => onStatusChanged("Pending")}
                className="button px-3 py-2 green-bg me-4"
              >
                Pending
              </button>
              <button
                onClick={() => onStatusChanged("Rejected")}
                className="button px-3 py-2 red-bg me-4"
              >
                Reject
              </button>
            </>
          )}
          {filtered[0]?.status === "Rejected" && (
            <>
              <button
                onClick={() => onStatusChanged("Approved")}
                className="button px-3 py-2 green-bg me-4"
              >
                Approve
              </button>
              <button
                onClick={() => onStatusChanged("Pending")}
                className="button px-3 py-2 red-bg me-4"
              >
                Pending
              </button>
            </>
          )}

          <button
            onClick={handleClose}
            className="button px-3 py-2 text-black grey-bg"
          >
            Close
          </button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ApproveBlog;
