import { Box } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import AddIcon from "@mui/icons-material/Add";

const ManageHotels = () => {
  const navigate = useNavigate();
  const handleAddPlace = () => {
    navigate("../add-hotel", { replace: true });
  };

  return (
    <Box>
      <Box>
        <h3>Manage Hotels</h3>
        <button
          onClick={handleAddPlace}
          className="button red-bg px-3 py-1 mt-2"
        >
          <AddIcon />
          Add Hotel
        </button>
      </Box>
      <Box sx={{ mt: 8 }}></Box>
    </Box>
  );
};

export default ManageHotels;
