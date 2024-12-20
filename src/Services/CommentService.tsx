import axios from "axios";
import { CommentPost } from "../Models/CommentPost";
import { handleError } from "../Helpers/ErrorHandlers";
import { toast } from "react-toastify";
import { CommentGet } from "../Models/CommentGet";

//vs code
//const api = "http://localhost:5117/api/";
//vs 2022
const api = "http://localhost:5117/api/comment/";

export const commentPostAPI = async (
  title: string,
  content: string,
  symbol: string
) => {
  try {
    debugger;
    const data = await axios
      .post<CommentPost>(
        api + `${symbol}`,
        {
          title: title,
          content: content,
        },
        {
          withCredentials: true,
        }
      )
      .then((res) => {
        if (res.status === 201) {
          toast.success("Comment Successful");
          return true;
        } else {
          toast.warning("Something went wrong while posting your comment");
          return false;
        }
      });
    return data;
  } catch (error) {
    handleError(error);
  }
};
export const commentGetAPI = async (stockSymbol: string) => {
  try {
    const data = await axios.get<CommentGet[]>(api + `?Symbol=${stockSymbol}`, {
      withCredentials: true,
    });
    return data;
  } catch (error) {
    handleError(error);
  }
};
