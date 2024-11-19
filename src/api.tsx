import axios from 'axios';
import { CompanySearch } from "../company"




interface SearchResponse {
    data: CompanySearch[];
}
export const searchCompanies = async (query: string) => {
    try {
      const data = await axios.get<SearchResponse>(
        `https://financialmodelingprep.com/api/v3/search?query=${query}&limit=10&exchange=NASDAQ&apikey=${process.env.REACT_APP_API_KEY}`
      );
      return data;
    } catch (e) {
      if (e instanceof Error) {
        console.log("error message: ", e.message);
        return e.message;
      } else {
        console.log("Unexpected error: ", e);
        return "An unexpected error occurred";
      }
      }
    
  };