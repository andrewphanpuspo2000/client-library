import {
  postComment,
  retrieveComment,
  updateCommentAxios,
} from "../../../helper/axios";
import { toast } from "react-toastify";
import { setComments } from "./commentSlice";

export const sendComment = (item) => async (dispatch) => {
  const { status, message } = await postComment(item);
  toast[status](message);
  if (status === "success") {
    console.log(status);
    dispatch(getComments());
    return status;
  }
};

export const getComments = () => async (dispatch) => {
  const { status, message, comments } = await retrieveComment();
  toast[status](message);
  if (status === "success") {
    console.log(comments);
    dispatch(setComments(comments));
  }
};

export const updateActivation = (item) => async (dispatch) => {
  const { status, message } = await updateCommentAxios(item);
  toast[status](message);

  if (status === "success") {
    dispatch(getComments());
  }
};
