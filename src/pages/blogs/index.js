import { Container } from "@mui/material";
import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Footer from "../../components/footer";
import Navbar from "../../components/Navbar";
import fetchBlogs from "../../redux/blogs/thunk/fetch-blogs";
import Search from "../all-places/search";
import Blog from "./blog";
import "./blog.scss";

const Blogs = () => {
  const blogsData = useSelector((state) => state?.blogs);
  const {blogs, searchKey} = blogsData
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBlogs);
  }, [dispatch]);

  return (
    <div>
      <Navbar />
      <div className="blog-banner">
        <div className="blog-banner-inset">
          <Container sx={{ pt: 10 }}>
            <p className="text-white h5">HAPPY READING :)</p>
            <h1 className="text-white display-2">Your Desired Blogs</h1>
          </Container>
        </div>
      </div>
      <Container sx={{ mt: 10 }}>
        <Search blog={true} />
        <div className="mt-3 row row-cols-1 row-cols-md-3 row-cols-lg-4 g-4">
          {blogs
            ?.filter((blog) => blog.status === "Approved")
            ?.filter((data) => {
              if (searchKey !== null) {
                return (
                  data?.username
                    .toLowerCase()
                    .includes(searchKey.toLowerCase()) ||
                  data?.title.toLowerCase().includes(searchKey.toLowerCase()) ||
                  data?.category.toLowerCase().includes(searchKey.toLowerCase())
                );
              }
              return true;
            })
            ?.map((data) => (
              <Blog key={data._id} data={data} />
            ))}
        </div>
      </Container>

      <Footer />
    </div>
  );
};

export default Blogs;
