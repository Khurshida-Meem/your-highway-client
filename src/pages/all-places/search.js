import { Box } from '@mui/material';
import React from 'react';
import searchImg from '../../assets/search.svg'
import './search.scss';

const Search = () => {
    return (
      <Box className="mt-5 border-search text-center grey-bg w-50 d-flex">
        <input
          className="w-100 grey-bg border-0 outline-0 px-3 py-2"
          type="search"
          name="search"
          placeholder="Search"
        />
        <img className="pe-2" src={searchImg} alt="" />
      </Box>
    );
};

export default Search;