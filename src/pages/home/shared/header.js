import { Box } from '@mui/material';
import React from 'react';

const Header = ({ title, paragraph }) => {
  return (
    <div>
      <h2 className="mb-3 text-center">
        <span className="title-style px-3 py-1">{title}</span>
      </h2>
      <Box className="mt-4 text-center">
        <p className="h6">{paragraph}</p>
      </Box>
    </div>
  );
};

export default Header;