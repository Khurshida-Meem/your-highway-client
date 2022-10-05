import { Box } from '@mui/material';
import React from 'react';
import { useDispatch } from 'react-redux';
import searchImg from '../../assets/search.svg'
import { searchKey } from '../../redux/places/actions';
import { searchKey as blogsKey } from '../../redux/blogs/actions';
import './search.scss';

let filterTimeout;

const Search = ({blog}) => {

    const dispatch = useDispatch();

    // applied debounce
    const handleSearchKey = (e) => {
      clearTimeout(filterTimeout);
      filterTimeout = setTimeout(() => {
        blog && dispatch(blogsKey(e.target.value));
        blog || dispatch(searchKey(e.target.value));
      }, 300);
    };

    return (
      <Box sx={{width:{xs: '100%',sm: '70%', md:'50%' }}} className="mt-5 border-search light-grey-bg d-flex">
        <img className="ps-2" src={searchImg} alt="" />
        <input
          className="w-100 light-grey-bg border-0 outline-0 px-3 py-2"
          type="search"
          name="search"
          placeholder="Enter your Destination"
          onChange={handleSearchKey}
        />
      </Box>
    );
};

export default Search;