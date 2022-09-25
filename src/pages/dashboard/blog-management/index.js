import { Box } from "@mui/material";
import React, { useEffect } from "react";
import AddIcon from "@mui/icons-material/Add";
import AllBlogs from "./all-blogs";
import VisibilityIcon from "@mui/icons-material/Visibility";
import useAuth from "../../../hooks/useAuth";
import BlogByCategory from "./category-blogs";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import fetchBlogs from "../../../redux/blogs/thunk/fetch-blogs";

const BlogManagement = () => {
  const { firebaseContext } = useAuth();
  const { admin, user } = firebaseContext;

  const blogsData = useSelector((state) => state?.blogs?.blogs);
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const handlePageChange = (url) => {
    navigate("../"+url, { replace: true });
  };

  useEffect(() => {
    dispatch(fetchBlogs);
  }, [dispatch]);


  return (
    <Box>
      <Box>
        <button
          onClick={() => handlePageChange("add-blog")}
          className="button red-bg px-3 py-1 mt-2"
        >
          <AddIcon />
          Add New Blog
        </button>

        {admin && (
          <button
            onClick={() => handlePageChange("all-blogs")}
            className="button ms-4 green-bg px-3 py-1 mt-2"
          >
            <VisibilityIcon className="me-1" />
            All Blogs
          </button>
        )}
      </Box>
      <Box>
        <h3 className="mt-5 mb-3">Manage Blogs</h3>
        {admin || (
          <div>
            <AllBlogs />
          </div>
        )}
        {admin && <BlogByCategory />}
      </Box>
    </Box>
  );
};

export default BlogManagement;
