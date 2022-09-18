import { Box, TextField } from "@mui/material";
import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import addPlace from "../../../redux/places/thunk/add-place";

const inputs = [
  {
    label: "Enter Place",
    id: "destination",
    required: true,
    type: "text",
  },
  {
    label: "Enter Country",
    id: "country",
    required: true,
    type: "text",
  },
  {
    label: "Enter Image Link",
    id: "thumb",
    required: true,
    type: "link",
  },
  {
    label: "Enter Rating",
    id: "star",
    required: true,
    type: "text",
  },
  {
    label: "Enter number of people rated",
    id: "starCount",
    required: true,
    type: "number",
  },
  {
    label: "Enter cost",
    id: "cost",
    required: true,
    type: "number",
  },
  {
    label: "Add description",
    id: "description",
    required: true,
    type: "text",
  },
];

const AddPlace = () => {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    dispatch(addPlace(data));
    reset();
  };

  return (
    <Box>
      <h2 className="mt-3">Add New Place</h2>
      <Box>
        <form onSubmit={handleSubmit(onSubmit)}>
          {inputs.map((field) => (
            <Box key={field.id}>
              {field.id === "description" ? (
                <TextField
                  className="mt-3 w-50"
                  label={field.label}
                  type={field.type}
                  variant="outlined"
                  multiline
                  rows={4}
                  {...register(field.id, { required: true })}
                  error={errors[field.id] && true}
                  helperText={errors[field.id] && "Requires a valid data"}
                />
              ) : (
                <TextField
                  className="mt-3 w-50"
                  label={field.label}
                  type={field.type}
                  variant="outlined"
                  {...register(field.id, { required: true })}
                  error={errors[field.id] && true}
                  helperText={errors[field.id] && "Requires a valid data"}
                />
              )}
            </Box>
          ))}

          <button
            type="submit"
            className="mt-3 py-2 px-4 d-block button primary-blue-bg"
          >
            <i className="fas fa-sign-in-alt"></i> Submit{" "}
          </button>
        </form>
      </Box>
    </Box>
  );
};

export default AddPlace;
