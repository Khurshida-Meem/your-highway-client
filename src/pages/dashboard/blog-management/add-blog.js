import { Box, FormControl, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import addPlace from "../../../redux/places/thunk/add-place";

const inputs = [
  {
    label: "Your Name",
    id: "username",
    required: true,
    type: "text",
  },
  {
    label: "Blog Title",
    id: "title",
    required: true,
    type: "text",
  },
  {
    label: "Blog Category",
    id: "category",
    required: true,
    type: "text",
  },
  {
    label: "Image",
    id: "thumb",
    required: true,
    type: "link",
  },
  {
    label: "Write Blog",
    id: "blog",
    required: true,
    type: "text",
  },
  
];

const AddBlog = () => {
  const dispatch = useDispatch();
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data)
    reset();
  };

  return (
    <Box>
      <h2 className="mt-3">Create New Blog</h2>
      <Box>
        <form onSubmit={handleSubmit(onSubmit)}>
          {inputs.map((field) => (
            <Box key={field.id}>
              {field.id === "category" ? (
                <FormControl className="mt-3 w-50">
                  <InputLabel id="demo-simple-select-label">Age</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={age}
                    label="Age"
                    onChange={handleChange}
                    {...register(field.id)}
                  >
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                  </Select>
                </FormControl>
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
            Create
          </button>
        </form>
      </Box>
    </Box>
  );
};

export default AddBlog;
