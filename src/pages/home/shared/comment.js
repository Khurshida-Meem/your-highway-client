import { Box } from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { THUNK_SERVER } from "../../../redux/server";
import useAuth from "../../../hooks/useAuth";
import { useState } from "react";
import { useEffect } from "react";


const Comment = ({ id }) => {
  const [comments, setComments] = useState([]);

  const { firebaseContext } = useAuth();
  const { user } = firebaseContext;
  const selectedComments = comments.filter(comment => comment.placeId === id )

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm();

  const onSubmit = (data) => {
    let text = new Date().toDateString().split(" ");
    const date = text[1] + " " + text[2] + ", " + text[3];
    const comment = {
      ...data,
      email: user?.email,
      name: user?.displayName,
      placeId: id,
      img: user?.photoURL,
      date: date,
    };

    axios.post(THUNK_SERVER + "comments", comment);

    alert("Commented successfully");
    reset();
  };

  useEffect(() => {
    fetch(THUNK_SERVER + "comments")
      .then((res) => res.json())
      .then((data) => setComments(data));
  }, [comments]);


  return (
    <div className="mt-3">
      <p className="h6">Leave a comment</p>
      <div className="mb-5">
        <form onSubmit={handleSubmit(onSubmit)}>
          <textarea
            className="w-75 border-search outline-0 p-2"
            name=""
            id=""
            cols="20"
            rows="3"
            {...register("comment", { required: true })}
          ></textarea>
          {errors.comment && (
            <span className="error mt-3">Please fill the comment</span>
          )}
          <button type="submit" className="d-block button dark-bg px-3">
            Post
          </button>
        </form>
      </div>

      {selectedComments.map((data) => (
        <Box key={data?.id} className="mt-2 mb-3 d-flex">
          <div>
            <img
              className="rounded-circle shadow-small"
              src={data?.img}
              alt=""
              width="50px"
            />
          </div>
          <div className="ms-3">
            <h5>{data?.name}</h5>
            <p>{data?.date}</p>
            <p className="h6 text-black">{data?.comment}</p>
          </div>
          {
            user?.email === data.email && <div>
              <button>Edit</button>
              <button>update</button>
            </div>
          }
        </Box>
      ))}
    </div>
  );
};

export default Comment;
