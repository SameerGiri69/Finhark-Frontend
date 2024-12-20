import React, { ChangeEvent, SyntheticEvent, useEffect, useState } from "react";
import Search from "../../Components/Search/Search";
import ListPortfolio from "../../Components/Portfolio/ListPortfolio/ListPortfolio";
import CardList from "../../Components/CardList/CardList";
import { CompanySearch } from "../../../company";
import { searchCompanies } from "../../api";
import { portfolioGet } from "../../Models/Portfolio";
import {
  portfolioAddAPI,
  portfolioDeleteAPI,
  portfolioGetAPI,
} from "../../Services/PortfolioService";
import { toast } from "react-toastify";
import { removeToast } from "react-toastify/dist/core/store";

interface Props {}

const SearchPage = (props: Props) => {
  const [search, setSearch] = useState<string>("");
  const [searchResult, setSearchResult] = useState<CompanySearch[]>([]);
  const [serverError, setServerError] = useState<string>("");
  const [portfolioValues, setPortfolioValues] = useState<portfolioGet[] | null>(
    []
  );

  const getPortfolio = () => {
    portfolioGetAPI()
      .then((res) => {
        if (res?.data) {
          setPortfolioValues(res?.data);
        }
      })
      .catch((e) => {
        toast.warning("Could not get portfolio values!");
      });
  };
  useEffect(() => {
    getPortfolio();
  }, []);
  const onClick = async (e: SyntheticEvent) => {
    const result = await searchCompanies(search);

    if (typeof result === "string") {
      setServerError(result);
      console.log("Server Error:", result);
    } else if (Array.isArray(result.data)) {
      await setSearchResult(result.data);
      console.log(result);
    }
  };
  // useEffect( () => {
  //   console.log()
  // }, [searchResult]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
    console.log(search);
  };
  // useEffect(() => {
  //   console.log()
  // },[search])
  const onPortfolioCreate = (e: any) => {
    e.preventDefault();
    portfolioAddAPI(e.target[0].value)
      .then((res) => {
        if (res?.status == 204) {
          toast.success("Stock added to portfolio!");
          getPortfolio();
        }
      })
      .catch((e) => {
        toast.warning("Could not create portfolio");
      });
  };
  const onProtfolioDelete = async (e: any) => {
    e.preventDefault();
    debugger;
    const res = await portfolioDeleteAPI(e.target[0].value);
    if (res?.status === 200) {
      toast.success("Deleted successfully");
      getPortfolio();
    } else {
      toast.warning("could not delete stock");
    }
  };
  return (
    <div className="App">
      <Search search={search} handleChange={handleChange} onClick={onClick} />
      <ListPortfolio
        portfolioValues={portfolioValues!}
        onPortfolioDelete={onProtfolioDelete}
      />
      {serverError && <h1>{serverError}</h1>}
      <CardList
        searchResults={searchResult}
        onPortfolioCreate={onPortfolioCreate}
      />
    </div>
  );
};

export default SearchPage;
