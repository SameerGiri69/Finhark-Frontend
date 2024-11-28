import axios from "axios";
import { handleError } from "../Helpers/ErrorHandlers";
import { UserProfileToken } from "../Models/User";

const api = "http://localhost:7273/api/";

export const loginAPI = async (username: string, password: string) => {
  try {
    const data = await axios.post<UserProfileToken>(api + "account/login", {
      username: username,
      password: password,
    });
  } catch (error) {
    handleError(error);
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
  } catch (error) {
    handleError(error);
  }
};
