import React from 'react';
import { useSelector } from 'react-redux';

const Reviews = () => {

    const reviews = useSelector(state => state.reviews.data);

    return (
        <div>
            
        </div>
    );
};

export default Reviews;