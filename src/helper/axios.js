import axios from "axios";

const rootAPI = "http://localhost:8000";
const userAPI = rootAPI + "/api/v1/user";
const bookAPI = rootAPI + "/api/v1/book";
const borrowAPI = rootAPI + "/api/v1/borrow";
const commentAPI = rootAPI + "/api/v1/comment";

const getLocalStorageInfo = () => {
  const str = localStorage.getItem("persist:userInfo");
  console.log(str);
  if (str) {
    const userInfo = JSON.parse(str);
    console.log(userInfo);
    if (userInfo.user) {
      const user = JSON.parse(userInfo.user);
      console.log(user);
      return user?._id;
    }
  }
};

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
  const respond = await axios.post(bookAPI, item, {
    headers: {
      Authorization: getLocalStorageInfo(),
    },
  });
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
  const result = await axios.delete(bookAPI + "/" + id, {
    headers: {
      Authorization: getLocalStorageInfo(),
    },
  });
  console.log(result);
  return result.data;
};

export const seekBook = async (search) => {
  const { data } = await axios.post(bookAPI + "/search" + "/" + search);
  console.log(data);
  return data;
};

export const addBorrowBook = async (item) => {
  const { data } = await axios.post(borrowAPI, item, {
    headers: {
      Authorization: getLocalStorageInfo(),
    },
  });
  return data;
};

export const getBorrowBook = async () => {
  const { data } = await axios.get(borrowAPI, {
    headers: {
      Authorization: getLocalStorageInfo(),
    },
  });
  return data;
};

export const returnBookHelper = async (item) => {
  console.log(item);
  const { data } = await axios.patch(borrowAPI + "/return", item, {
    headers: {
      Authorization: getLocalStorageInfo(),
    },
  });
  console.log(data);
  return data;
};

export const postComment = async (item) => {
  const { data } = await axios.post(commentAPI, item, {
    headers: {
      Authorization: getLocalStorageInfo(),
    },
  });
  return data;
};

export const retrieveComment = async () => {
  const { data } = await axios.get(commentAPI);
  return data;
};

export const updateCommentAxios = async (item) => {
  const { data } = await axios.patch(commentAPI, item, {
    headers: {
      Authorization: getLocalStorageInfo(),
    },
  });

  return data;
};
