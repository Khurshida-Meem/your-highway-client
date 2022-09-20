import { Box } from "@mui/material";
import React from "react";

const Header = ({ title, paragraph }) => {
  return (
    <div>
      <span>
        <div>
          <h2 className="mb-3 text-center ">
            <span className="title-style title-border display-6 px-3 py-1">
              {title}
            </span>
          </h2>
        </div>
      </span>

      <Box className="mt-4 text-center">
        <p className="h6">{paragraph}</p>
      </Box>
    </div>
  );
};

export default Header;
