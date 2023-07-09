import {
  addBorrowBook,
  getBorrowBook,
  returnBookHelper,
} from "../../helper/axios";
import { toast } from "react-toastify";
import { fetchBook } from "../Components/Book-com/bookAction";
import { setBorrowedBook } from "./borrowSlice";

export const addBorrowAction = (data) => async (dispatch) => {
  const { status, message } = await addBorrowBook(data);
  toast[status](message);

  if (status === "success") {
    dispatch(fetchBook());
  } else {
    console.log(status, message);
  }
};

export const getAllBorrowed = () => async (dispatch) => {
  const { status, message, result } = await getBorrowBook();

  if (status === "success") {
    dispatch(setBorrowedBook(result));
  }
};
export const returnBookAction = (item) => async (dispatch) => {
  console.log(item);
  const { status, message } = await returnBookHelper(item);

  toast[status](message);
  if (status === "success") {
    dispatch(getAllBorrowed());
  }
};
