import { Box, Tab, Tabs, Typography } from '@mui/material';
import PropTypes from "prop-types";
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import fetchBlogs from '../../../redux/blogs/thunk/fetch-blogs';
import BlogTable from './blog-table';
import './blog.scss';


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const BlogByCategory = () => {

    const [value, setValue] = React.useState(0);
     const blogsData = useSelector((state) => state?.blogs?.blogs);
     const dispatch = useDispatch();

     useEffect(() => {
       dispatch(fetchBlogs);
     }, [dispatch]);

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };

    return (
      <Box>
        <Box
          className="tabs"
          sx={{ maxWidth: { xs: 320, sm: 480 }, bgcolor: "background.paper" }}
        >
          <Tabs
            value={value}
            onChange={handleChange}
            variant="scrollable"
            scrollButtons
            allowScrollButtonsMobile
            aria-label="scrollable force tabs example"
          >
            <Tab label="Pending" {...a11yProps(0)} />
            <Tab label="Approved" {...a11yProps(1)} />
            <Tab label="Rejected" {...a11yProps(2)} />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          <BlogTable
            blogs={blogsData.filter((data) => data?.status === "Pending")}
          />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <BlogTable
            blogs={blogsData.filter((data) => data?.status === "Approved")}
          />
        </TabPanel>
        <TabPanel value={value} index={2}>
          <BlogTable
            blogs={blogsData.filter((data) => data?.status === "Rejected")}
          />
        </TabPanel>
      </Box>
    );
};

export default BlogByCategory;