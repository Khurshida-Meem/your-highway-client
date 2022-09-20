import { Box } from "@mui/material";
import React from "react";
import peep1 from "../../../assets/user-img-1.png";
import peep2 from "../../../assets/user-img-2.png";
import peep3 from "../../../assets/user-img-3.png";

const comments = [
  {
    id: 1,
    img: peep1,
    name: "Khurshida",
    comment:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum, obcaecati?",
    date: "December 17, 2021",
  },
  {
    id: 2,
    img: peep2,
    name: "Tamanna",
    comment:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum, obcaecati?",
    date: "March 24, 2022",
  },
  {
    id: 3,
    img: peep3,
    name: "Bithi",
    comment:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum, obcaecati?",
    date: "June 17, 2022",
  },
];

const Comment = () => {
  return (
    <div className="mt-3">
      <p className="h6">Leave a comment</p>
      <div className="mb-5">
        <textarea
          className="w-75 border-search outline-0 p-2"
          name=""
          id=""
          cols="20"
          rows="3"
        ></textarea>
        <button className="d-block button dark-bg px-3">Post</button>
      </div>

      {comments.map((data) => (
        <Box key={data.id} className="mt-2 mb-3 d-flex">
          <div>
            <img src={data.img} alt="" width="50px" />
          </div>
          <div className="ms-3">
            <h5>{data.name}</h5>
            <p>{data.date}</p>
            <p className="h6 text-black">{data.comment}</p>
          </div>
        </Box>
      ))}
    </div>
  );
};

export default Comment;
