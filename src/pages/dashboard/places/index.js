import { Box } from '@mui/material';
import React from 'react';
import AddIcon from '@mui/icons-material/Add';
import Places from './places';
import { useNavigate } from 'react-router-dom';

const ManagePlaces = () => {

    const navigate = useNavigate()
    const handleAddPlace = () => {
        navigate('../add-place', {replace: true})
    }

    return (
        <Box>
            <Box>
                <h3>Manage Places</h3>
                <button onClick={handleAddPlace} className='button red-bg px-3 py-1 mt-2'><AddIcon />Add Place</button>
            </Box>
            <Box sx={{mt:8}}>
                <Places />
            </Box>
        </Box>
    );
};

export default ManagePlaces;