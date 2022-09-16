import {
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
} from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";

const UpdateReview = ({ id, open, handleClose }) => {
  const reviewsData = useSelector((state) => state?.reviews?.data);

  const filtered = reviewsData.filter((data) => data?._id === id);
  const textField = [
    {
      id: "name",
      label: "Name",
      value: filtered[0]?.name,
    },
    {
      id: "email",
      label: "Email",
      defaultValue: filtered[0]?.email,
    },
    {
      id: "designation",
      label: "Designation",
      value: filtered[0]?.designation,
    },
    {
      id: "comment",
      label: "Comment",
      value: filtered[0]?.comment,
    },
  ];

  const descriptionElementRef = React.useRef(null);
  React.useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {};

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      scroll={"paper"}
      aria-labelledby="scroll-dialog-title"
      aria-describedby="scroll-dialog-description"
    >
      <DialogTitle id="scroll-dialog-title">Update</DialogTitle>
      <DialogContent>
        <DialogContentText
          id="scroll-dialog-description"
          ref={descriptionElementRef}
          tabIndex={-1}
        >
          Hence you are going to update your review. Hope you enjoyed our
          service.
        </DialogContentText>
        <form onSubmit={handleSubmit(onSubmit)}>
          {textField.map((data) => (
            <div key={data?.id}>
              <TextField
                className="my-3"
                fullWidth
                defaultValue={data?.value}
                value={data?.defaultValue}
                {...register(data.id, { required: true })}
                label={data.label}
                variant="outlined"
                required
              />
              {errors[data.id] && (
                <span className="d-block color-red">
                  This field is required
                </span>
              )}
            </div>
          ))}

          <div>
            <input
              className="button px-3 py-2 dark-bg me-4"
              type="submit"
              value="Update"
            />
            <button className="button px-3 py-2 red-bg" onClick={handleClose}>
              Close
            </button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default UpdateReview;
