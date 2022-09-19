import { Box, FormControl, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import useAuth from "../../../hooks/useAuth";
import addBlog from "../../../redux/blogs/thunk/add-blog";

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
  const [category, setCategory] = React.useState("");
  const { firebaseContext } = useAuth();
  const { user } = firebaseContext;

  const handleChange = (event) => {
    setCategory(event.target.value);
  };

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const views = Math.floor(Math.random() * 10000);
    let text = (new Date()).toDateString().split(" ");
    const date = text[1] + " " + text[2] + ", " + text[3];
    const status = "Pending";
    const email = user?.email;

    const blog = {
      ...data,
      category,
      date,
      views,
      status,
      email,
      comments: [],
    };
    dispatch(addBlog(blog));
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
                  <InputLabel id="demo-simple-select-label">
                    {field.label}
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={category}
                    label={field.label}
                    onChange={handleChange}
                  >
                    <MenuItem value={"Tips"}>Tips</MenuItem>
                    <MenuItem value={"Travel"}>Travel</MenuItem>
                    <MenuItem value={"Entertainment"}>Entertainment</MenuItem>
                    <MenuItem value={"News"}>News</MenuItem>
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
