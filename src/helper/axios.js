import axios from "axios";

const rootAPI = "http://localhost:8000";
const userAPI = rootAPI + "/api/v1/user";
const bookAPI = rootAPI + "/api/v1/book";
const borrowAPI = rootAPI + "/api/v1/borrow";
export const postUser = async (item) => {
  const respond = await axios.post(userAPI, item);
  const { data } = respond;
  return data;
};

export const checkAuth = async (item) => {
  const { data } = await axios.get(userAPI + "/login", { params: item });
  return data;
};

export const postBook = async (item) => {
  const respond = await axios.post(bookAPI, item);
  const { data } = respond;
  return data;
};

export const getBook = async () => {
  const { data } = await axios.get(bookAPI);

  return data;
};

export const editBook = async (item) => {
  const { data } = await axios.put(bookAPI, item);

  return data;
};

export const deletingBook = async (id) => {
  const result = await axios.delete(bookAPI + "/" + id);
  console.log(result);
  return result.data;
};

export const seekBook = async (search) => {
  const { data } = await axios.post(bookAPI + "/search" + "/" + search);
  console.log(data);
  return data;
};

export const addBorrowBook = async (item) => {
  const { data } = await axios.post(borrowAPI, item);
  return data;
};

export const getBorrowBook = async () => {
  const { data } = await axios.get(borrowAPI);
  return data;
};
