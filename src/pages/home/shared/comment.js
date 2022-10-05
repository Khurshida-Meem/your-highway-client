import { Avatar, Box } from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../../hooks/useAuth";
import { useEffect } from "react";
import variables from '../../../sass/_variable.module.scss';
import { useDispatch, useSelector } from "react-redux";
import fetchComments from "../../../redux/comments/thunk/fetch-comments";
import addComment from "../../../redux/comments/thunk/add-comment";
import deleteComment from "../../../redux/comments/thunk/delete-comment";

const Comment = ({ id }) => {

  const dispatch = useDispatch()
  const { firebaseContext } = useAuth();
  const { user, admin } = firebaseContext;

  const comments = useSelector((state) => state.comments.comments);
  const selectedComments = comments.filter(comment => comment.placeId === id );

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

    dispatch(addComment(comment));
    reset();
  };

 
  useEffect(() => {
    dispatch(fetchComments);
  }, [dispatch]);


  const handleDelete = id => {
    const proceed = window.confirm("Are you sure, you want to delete?");
    if (proceed) {
      dispatch(deleteComment(id));
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
              <button className='button pink-bg px-3 py-1 rounded-pill' onClick={() => handleDelete(data._id)}>Delete</button>
            </div>
          )}
        </Box>
      ))}
    </div>
  );
};

export default Comment;
