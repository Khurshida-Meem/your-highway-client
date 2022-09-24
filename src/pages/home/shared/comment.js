import { Avatar, Box } from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { THUNK_SERVER } from "../../../redux/server";
import useAuth from "../../../hooks/useAuth";
import { useState } from "react";
import { useEffect } from "react";
import variables from '../../../sass/_variable.module.scss';

const Comment = ({ id }) => {
  const [comments, setComments] = useState([]);

  const { firebaseContext } = useAuth();
  const { user, admin } = firebaseContext;
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
    reset();
  };

  useEffect(() => {
    fetch(THUNK_SERVER + "comments")
      .then((res) => res.json())
      .then((data) => setComments(data));
  }, [comments]);

  const handleDelete = id => {
    const proceed = window.confirm("Are you sure, you want to delete?");
    if (proceed) {
      axios.delete(THUNK_SERVER + "comments/"+ id);
    }
    
  }


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
        <Box key={data?._id} className="mt-2 mb-3 d-flex">
          <div>
            {data?.img ? (
              <img
                className="rounded-circle shadow-small"
                src={data?.img}
                alt=""
                width="50px"
              />
            ) : (
              <Avatar
                className="shadow-small"
                sx={{
                  bgcolor: variables.colorDark,
                  width: "50px",
                  height: "50px",
                }}
                alt={data?.name}
              />
            )}
            
          </div>
          <div className="mx-3">
            <h5>{data?.name}</h5>
            <p>{data?.date}</p>
            <p className="h6 text-black">{data?.comment}</p>
          </div>
          {(user?.email === data.email || admin) && (
            <div>
              <button onClick={() => handleDelete(data._id)}>Delete</button>
            </div>
          )}
        </Box>
      ))}
    </div>
  );
};

export default Comment;
