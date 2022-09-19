import { Box } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import fetchBlogs from "../../../redux/blogs/thunk/fetch-blogs";
import BlogTable from "./blog-table";


const AllBlogs = () => {
  const blogsData = useSelector((state) => state?.blogs?.blogs);
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(fetchBlogs);
  }, [dispatch]);

  return (
    <Box>
      <BlogTable blogs={blogsData} />
    </Box>
  );
};

export default AllBlogs;
