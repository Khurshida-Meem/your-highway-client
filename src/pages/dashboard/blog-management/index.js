import { Box } from "@mui/material";
import React from "react";
import AddIcon from "@mui/icons-material/Add";
import AllBlogs from "./all-blogs";
import VisibilityIcon from "@mui/icons-material/Visibility";
import useAuth from "../../../hooks/useAuth";
import BlogByCategory from "./category-blogs";

const BlogManagement = () => {
  const { firebaseContext } = useAuth();
  const { user, admin } = firebaseContext;

  return (
    <Box>
      <Box>
        <button className="button red-bg px-3 py-1 mt-2">
          <AddIcon />
          Add New Blog
        </button>

        {admin && (
          <button className="button ms-4 green-bg px-3 py-1 mt-2">
            <VisibilityIcon className="me-1" />
            All Blogs
          </button>
        )}
      </Box>
      <Box>
        <h3 className="mt-5 mb-3">Manage Blogs</h3>
        {admin || <AllBlogs />}
        {admin && <BlogByCategory />}
      </Box>
    </Box>
  );
};

export default BlogManagement;
