import { Box } from '@mui/material';
import React from 'react';
import { useDispatch } from 'react-redux';
import searchImg from '../../assets/search.svg'
import { searchKey } from '../../redux/places/actions';
import './search.scss';

let filterTimeout;

const Search = () => {

    const dispatch = useDispatch();

    // applied debounce
    const handleSearchKey = (e) => {
      clearTimeout(filterTimeout);
      filterTimeout = setTimeout(() => {
        dispatch(searchKey(e.target.value));
      }, 300);
    };

    return (
      <Box className="mt-5 border-search text-center grey-bg w-50 d-flex">
        <input
          className="w-100 grey-bg border-0 outline-0 px-3 py-2"
          type="search"
          name="search"
          placeholder="Search"
          onChange={handleSearchKey}
        />
        <img className="pe-2" src={searchImg} alt="" />
      </Box>
    );
};

export default Search;