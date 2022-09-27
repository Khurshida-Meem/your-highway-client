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
              className="d-block p-2"
              defaultValue={user.displayName}
              {...register("name", { required: true })}
            />
            {errors.name && <span>This field is required</span>}
            <input
              className="d-block mt-2 p-2"
              value={user.email}
              {...register("email", { required: true })}
            />
            <input
              className="d-block mt-2 p-2"
              placeholder="Contact Number"
              {...register("contact", { required: true })}
            />
            {errors.contact && <span>This field is required</span>}
            <input
              className="d-block mt-2 p-2"
              value={hotel?.country}
              {...register("country", { required: true })}
            />
            <input
              className="d-block mt-2 p-2"
              value={hotel?.place}
              {...register("place", { required: true })}
            />
            <input
              className="d-block mt-2 p-2"
              value={hotel?.hotel_name}
              {...register("hotel_name", { required: true })}
            />
            <select
              className="d-block w-100 mt-2 p-2"
              {...register("room_type")}
            >
              {hotel?.available_rooms?.map((data) => (
                <option value={data.type}>{data.type}</option>
              ))}
            </select>
            <label className=" mt-2">Check In</label>
            <input
              type="date"
              className="w-100 d-block p-2"
              {...register("check_in", { required: true })}
            />
            {errors.check_in && <span>This field is required</span>}
            <label className=" mt-2">Check Out</label>
            <input
              type="date"
              className="w-100 d-block p-2"
              {...register("check_out", { required: true })}
            />
            {errors.check_out && <span>This field is required</span>}

            <div className="mt-4">
              <input className="button dark-bg p-2 me-3" type="submit" />
              <span
                onClick={handleClose}
                className="button px-3 py-2 text-black grey-bg"
              >
                Close
              </span>
            </div>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default BookingDialog;
