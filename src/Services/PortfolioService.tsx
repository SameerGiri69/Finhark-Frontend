import axios, { Axios } from "axios";
import { portfolioGet, portfolioPost } from "../Models/Portfolio";
import { handleError } from "../Helpers/ErrorHandlers";

const api = "http://localhost:5117/api/portfolio/";

export const portfolioAddAPI = async (symbol: string) => {
  try {
    return await axios.post<portfolioPost>(
      api + `?symbol=${symbol}`,
      {},
      { withCredentials: true }
    );
  } catch (error) {
    handleError(error);
  }
};

export const portfolioDeleteAPI = async (symbol: string) => {
  try {
    return await axios.delete<portfolioPost>(api + `?symbol=${symbol}`, {
      withCredentials: true,
    });
  } catch (error) {
    handleError(error);
  }
};
export const portfolioGetAPI = async () => {
  try {
    return await axios.get<portfolioGet[]>(api, {
      withCredentials: true,
    });
  } catch (error) {
    handleError(error);
  }
};
