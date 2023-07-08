import { addBorrowBook, getBorrowBook } from "../../helper/axios";
import { toast } from "react-toastify";
import { fetchBook } from "../Components/Book-com/bookAction";
import { setBorrowedBook } from "./borrowSlice";
export const addBorrowAction = (data) => async (dispatch) => {
  const { status, message } = await addBorrowBook(data);
  toast[status](message);

  status === "success" ? dispatch(fetchBook()) : console.log(status);
};

export const getAllBorrowed = () => async (dispatch) => {
  const { status, message, result } = await getBorrowBook();

  toast[status](message);
  if (status === "success") {
    dispatch(setBorrowedBook(result));
  }
};
