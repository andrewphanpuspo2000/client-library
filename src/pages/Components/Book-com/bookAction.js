import { toast } from "react-toastify";
import {
  deletingBook,
  editBook,
  getBook,
  postBook,
  seekBook,
} from "../../../helper/axios";
import { setBooks, setSearch } from "./bookSlice";

export const addBook = (userObj) => async (dispatch) => {
  const dataPending = postBook(userObj);
  toast.promise(dataPending, {
    pending: "pending....",
  });

  const { status, message } = await dataPending;
  toast[status](message);
  if (status === "success") {
    //fetch all the books
    dispatch(fetchBook());
    return status;
  }
};

export const fetchBook = () => async (dispatch) => {
  const { status, message, books } = await getBook();
  console.log(books);

  if (status === "success") dispatch(setBooks(books));
};

export const editingBook = (item) => async (dispatch) => {
  const { status, message } = await editBook(item);
  toast[status](message);
  if (status === "success") {
    dispatch(fetchBook());
    return status;
  }
};

export const deleteOneBook = (id) => async (dispatch) => {
  const result = await deletingBook(id);
  const { status, message } = result;
  toast[status](message);
  if (status === "success") {
    dispatch(fetchBook());
    return status;
  }
};

export const retrieveBook = (item) => async (dispatch) => {
  const { status, message } = await seekBook(item);
  if (status === "success") dispatch(setSearch(message));
};
