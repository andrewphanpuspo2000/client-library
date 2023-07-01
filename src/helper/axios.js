import axios from "axios";

const rootAPI = "http://localhost:8000";
const userAPI = rootAPI + "/api/v1/user";

export const postUser = async (item) => {
  const respond = await axios.post(userAPI, item);
  const { data } = respond;
  return data;
};

export const checkAuth = async (item) => {
  const { data } = await axios.get(userAPI + "/login", { params: item });
  return data;
};
