import { checkAuth } from "../../../helper/axios";
import { setUser } from "./userSlice";
import { toast } from "react-toastify";
export const signInAdminAction = (userObj) => async (dispatch) => {
  const { status, message, user } = await checkAuth(userObj);
  console.log(status);
  user && dispatch(setUser(user));
  toast[status](message);
};
