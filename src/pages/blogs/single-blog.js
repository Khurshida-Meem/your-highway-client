import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import Footer from '../../components/footer';
import Navbar from '../../components/Navbar';
import { THUNK_SERVER } from '../../redux/server';
import { BannerBg } from '../../styled.components';

const SingleBlog = () => {

    const [blogs, setBlogs] = useState({});
    const { blogsId } = useParams();

    const { username, title, thumb, blog, date } = blogs;

    useEffect(() => {
      (async () => {
        let response = await fetch(THUNK_SERVER + `blogs/${blogsId}`);
        response = await response.json();
        setBlogs(response);
      })();
    }, [blogsId]);

    return (
      <div>
        <Navbar />
        <BannerBg background={`${thumb}`}>
          <div className="banner-inset ">
            <Container>
              <h1 className="display-4 pt-5 text-white">{title}</h1>
              <h1 className="text-white">{username}</h1>
              <p className="text-white">{date}</p>
            </Container>
          </div>
        </BannerBg>
        <Container className="mt-5">{blog}</Container>
        <Footer />
      </div>
    );
};

export default SingleBlog;