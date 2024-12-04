import axios from "axios";
import { handleError } from "../Helpers/ErrorHandlers";
import { UserProfileToken } from "../Models/User";

// const api = "http://localhost:5117/api/";
//vs 2022
const api = "http://localhost:5117/api/";

export const loginAPI = async (email: string, password: string) => {
  try {
    const data = await axios.post<UserProfileToken>(api + "account/login", {
      Email: email,
      Password: password,
    });
    return data;
  } catch (error) {
    handleError(error);
    console.log(error);
  }
};
export const registerAPI = async (
  email: string,
  password: string,
  userName: string
) => {
  try {
    const data = await axios.post<UserProfileToken>(api + "account/register", {
      email: email,
      password: password,
      userName: userName,
    });
    return data;
  } catch (error) {
    handleError(error);
  }
};
export const logOutAPI = async () => {
  axios.get(api + `account/logout`, { withCredentials: true });
};
