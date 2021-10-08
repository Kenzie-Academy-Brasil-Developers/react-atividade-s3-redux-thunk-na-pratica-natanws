import { ADD_COMMENT } from "./actionTypes";

export const addComment = (updatedUser) =>
  // console.log(updatedUser),
  ({
    type: ADD_COMMENT,
    updatedUser,
  });
