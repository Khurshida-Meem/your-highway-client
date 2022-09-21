import { Card, CardContent, CardMedia, Rating } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';

const Place = ({ data, offered }) => {
  const navigate = useNavigate();

  const handleClick = (id) => {
    offered
      ? navigate(`places/${id}`, { replace: true })
      : navigate(`${id}`, { replace: true });
    
  };

  return (
    <Card className="rounded-card" sx={{ maxWidth: 345, mr: 2 }}>
      <CardMedia
        component="img"
        height="160"
        image={data?.thumb}
        alt={data?.destination}
      />
      <CardContent>
        <h3>{data?.destination}</h3>
        <p>
          <LocationOnIcon sx={{ fontSize: "1.2rem" }} className="pink-color" />
          {data?.country}{" "}
        </p>
        <div className="d-flex justify-content-between">
          <Rating
            name="read-only"
            value={parseFloat(data?.star)}
            precision={0.5}
            readOnly
          />
          <p>
            (<PeopleAltIcon className="primary-text" />
            {data?.starCount})
          </p>
        </div>
        <div className="d-flex justify-content-between">
          <h3>
            ${data?.cost}
            <span className="h6">(starting from)</span>{" "}
          </h3>
          <button
            className="p rounded-pill text-white button pink-bg py-2 px-3"
            onClick={() => handleClick(data?._id)}
          >
            View Details
          </button>
        </div>
      </CardContent>
    </Card>
  );
};

export default Place;