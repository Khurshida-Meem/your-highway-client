import { Box} from "@mui/material";
import React, { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { THUNK_SERVER } from "../../redux/server";
import './hotels.scss';

const Hotels = () => {

  const [hotels, setHotels] = useState([]);

  useEffect(() => {
    fetch(THUNK_SERVER + "hotels")
      .then((res) => res.json())
      .then((data) => setHotels(data));
  }, [hotels]);
  
    const navigate = useNavigate();

    const handleDetailClick = id => {
        navigate('../hotels/'+id, {replace: true})
    }
  return (
    <Box className="mt-5">
      <h2>Hotel Sevices on this Destination</h2>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {hotels.map((data) => (
          <div key={data?.id} className="col ">
            <div className="card rounded-card h-100">
              <img
                src={data?.img}
                className="card-img-top"
                alt="..."
                height="200px"
              />
              <div className="card-body">
                <h2 className="card-title">{data?.hotel_name}</h2>
                <h5 className="card-title">{data?.place}</h5>
                <button
                  onClick={() => handleDetailClick(data._id)}
                  className="mt-2 button pink-bg px-3 py-2 rounded-pill"
                >
                  Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Box>
  );
};

export default Hotels;
