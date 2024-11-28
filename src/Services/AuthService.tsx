import axios from "axios";
import { handleError } from "../Helpers/ErrorHandlers";
import { UserProfileToken } from "../Models/User";

const api = "https://localhost:7273/api/";

export const loginAPI = async (email: string, password: string) => {
  try {
    debugger;
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
  username: string,
  password: string,
  email: string
) => {
  try {
    const data = await axios.post<UserProfileToken>(api + "account/register", {
      username: username,
      password: password,
      email: email,
    });
    return data;
  } catch (error) {
    handleError(error);
  }
};
