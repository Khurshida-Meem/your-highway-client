import { Container } from "@mui/material";
import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Footer from "../../components/footer";
import Navbar from "../../components/Navbar";
import fetchBlogs from "../../redux/blogs/thunk/fetch-blogs";
import Header from "../home/shared/header";
import SingleBlog from "./blog";
import './blog.scss';

const Blogs = () => {
  const blogsData = useSelector((state) => state?.blogs?.blogs);
  const dispatch = useDispatch();

  const d = new Date();
  let text = d.toDateString().split(" ");
  const date = text[1] + " " + text[2] + ", " + text[3];
  console.log(date);

  useEffect(() => {
    dispatch(fetchBlogs);
  }, [dispatch]);

  return (
    <div>
      <Navbar />
      <Container sx={{ mt: 10 }}>
        <Header title={"Blogs for You"} />
        <div className="mt-3 row row-cols-1 row-cols-md-3 row-cols-lg-4 g-4">
          {blogsData?.map((data) => (
            <SingleBlog key={data._id} data={data} />
          ))}
        </div>
      </Container>

      <Footer />
    </div>
  );
};

export default Blogs;
