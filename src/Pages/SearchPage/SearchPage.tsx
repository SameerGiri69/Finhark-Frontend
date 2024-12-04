import React, { ChangeEvent, SyntheticEvent, useEffect, useState } from "react";
import Search from "../../Components/Search/Search";
import ListPortfolio from "../../Components/Portfolio/ListPortfolio/ListPortfolio";
import CardList from "../../Components/CardList/CardList";
import { CompanySearch } from "../../../company";
import { searchCompanies } from "../../api";

interface Props {}

const SearchPage = (props: Props) => {
  const [search, setSearch] = useState<string>("");
  const [searchResult, setSearchResult] = useState<CompanySearch[]>([]);
  const [serverError, setServerError] = useState<string>("");
  const [portfolioValues, setPortfolioValues] = useState<string[]>([]);

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
    const exists = portfolioValues.find((value) => value === e.target[0].value);
    if (exists) return;
    const updatedPortfolio = [...portfolioValues, e.target[0].value];
    setPortfolioValues(updatedPortfolio);
  };
  const onProtfolioDelete = (e: any) => {
    e.preventDefault();
    const removed = portfolioValues.filter((value) => {
      return value !== e.target[0].value;
    });
    setPortfolioValues(removed);
  };
  return (
    <div className="App">
      <Search search={search} handleChange={handleChange} onClick={onClick} />
      <ListPortfolio
        portfolioValues={portfolioValues}
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
