import React from "react";

const AvailableRooms = ({ room }) => {
  console.log(room);
  return (
    <div className="card" style={{ width: "18rem" }}>
      <img
        src={room?.img}
        className="card-img-top"
        alt={room.type}
        height="200px"
      />
      <div className="card-body">
        <h5 className="card-title">{room.type}</h5>
        <div className="card-text">
          <ul>
            {room?.features?.map((feat) => (
              <ol>{feat}</ol>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AvailableRooms;
