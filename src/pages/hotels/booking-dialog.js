import { Dialog, DialogContent, DialogTitle } from "@mui/material";
import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../hooks/useAuth";
import { THUNK_SERVER } from "../../redux/server";

const BookingDialog = ({ open, handleClose, hotel }) => {
  const { firebaseContext } = useAuth();
  const { user } = firebaseContext;

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const onSubmit = (data) => {
    let text = new Date().toDateString().split(" ");
    const date = text[1] + " " + text[2] + ", " + text[3];
    const booking = {
      ...data,
      status: "Pending",
      date,
    };
    axios.post(THUNK_SERVER + "bookings", booking);
    reset();
  };

  const descriptionElementRef = React.useRef(null);
  React.useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      scroll={"paper"}
      aria-labelledby="scroll-dialog-title"
      aria-describedby="scroll-dialog-description"
    >
      <DialogTitle id="scroll-dialog-title">Make Booking</DialogTitle>
      <DialogContent>
        <div className="mt-4">
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              className="d-block"
              defaultValue={user.displayName}
              {...register("name", { required: true })}
            />
            {errors.name && <span>This field is required</span>}
            <input
              className="d-block"
              value={user.email}
              {...register("email", { required: true })}
            />
            <input
              className="d-block"
              placeholder="Contact Number"
              {...register("contact", { required: true })}
            />
            {errors.contact && <span>This field is required</span>}
            <input
              className="d-block"
              value={hotel?.country}
              {...register("country", { required: true })}
            />
            <input
              className="d-block"
              value={hotel?.place}
              {...register("place", { required: true })}
            />
            <input
              className="d-block"
              value={hotel?.hotel_name}
              {...register("hotel_name", { required: true })}
            />
            <select className="d-block w-100" {...register("room_type")}>
              {hotel?.available_rooms?.map((data) => (
                <option value={data.type}>{data.type}</option>
              ))}
            </select>
            <label>Check In</label>
            <input
              type="date"
              className="d-block"
              placeholder="Contact Number"
              {...register("check_in", { required: true })}
            />
            {errors.check_in && <span>This field is required</span>}
            <label>Check Out</label>
            <input
              type="date"
              className="d-block"
              placeholder="Contact Number"
              {...register("check_out", { required: true })}
            />
            {errors.check_out && <span>This field is required</span>}

            <input type="submit" />
          </form>
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

export default BookingDialog;
