import { Box } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import useAuth from "../../../hooks/useAuth";
import fetchBlogs from "../../../redux/blogs/thunk/fetch-blogs";
import BlogTable from "./blog-table";


const AllBlogs = () => {

  const { firebaseContext } = useAuth();
  const { admin, user } = firebaseContext;

  const blogsData = useSelector((state) => state?.blogs?.blogs);
  const dispatch = useDispatch();
  const filtered = blogsData?.filter((data) => data?.email === user?.email);

  
  useEffect(() => {
    dispatch(fetchBlogs);
  }, [dispatch]);

  return (
    <Box>
      <BlogTable blogs={admin ? blogsData : filtered} />
    </Box>
  );
};

export default AllBlogs;
