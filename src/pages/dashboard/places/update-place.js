import {
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
} from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import updatePlace from "../../../redux/places/thunk/update-place";

const UpdatePlace = ({ id, open, handleClose, setOpen }) => {
  const placesData = useSelector((state) => state?.places?.places);
  const dispatch = useDispatch();

  const filtered = placesData?.filter((data) => data?._id === id);

  const descriptionElementRef = React.useRef(null);
  React.useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);

  const textField = [
    {
      id: "destination",
      label: "Destination",
      value: filtered[0]?.destination,
    },
    {
      id: "country",
      label: "Country",
      value: filtered[0]?.country,
    },
    {
      id: "thumb",
      label: "Image Link",
      value: filtered[0]?.thumb,
    },
    {
      id: "description",
      label: "Description",
      value: filtered[0]?.description,
    },
    {
      id: "cost",
      label: "Cost",
      value: filtered[0]?.cost,
    },
  ];

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    dispatch(updatePlace(id, data));
    alert("Updated place successfully");
    setOpen(false);
  };

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
                {...register(data?.id, { required: true })}
                label={data?.label}
                variant="outlined"
                required
              />
              {errors[data?.id] && (
                <span className="d-block color-red">
                  This field is required
                </span>
              )}
            </div>
          ))}

          <div>
            <button className="button px-3 py-2 dark-bg me-4" type="submit">
              Update
            </button>
            <span className="button px-3 py-2 red-bg" onClick={handleClose}>
              Close
            </span>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default UpdatePlace;
