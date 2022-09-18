import { Box, TextField } from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";
import baseApi from "../../../redux/base-api";

const MakeAdmin = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (email) => {
    baseApi.put("users/admin", email).then(() => reset());
  };

  return (
    <Box className="mt-5">
      <h3>Add New Admin</h3>
      <Box className="mt-2">
        <form onSubmit={handleSubmit(onSubmit)}>
          <TextField
            className="mt-3 w-50"
            label={"Email"}
            type={"email"}
            variant="outlined"
            {...register("email", { required: true })}
            error={errors.email && true}
            helperText={errors.email && "Requires a valid data"}
          />

          <button
            type="submit"
            className="mt-3 py-2 px-4 d-block button primary-blue-bg"
          >
            Submit
          </button>
        </form>
      </Box>
    </Box>
  );
};

export default MakeAdmin;
