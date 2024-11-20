import { ChangeEvent, SyntheticEvent, useEffect, useState } from 'react';
import CardList from './Components/CardList/CardList';
import Search from './Components/Search/Search';
import { CompanySearch } from '../company';
import { searchCompanies } from './api';

function App() {
  const [search, setSearch] = useState<string>("");
  const [searchResult, setSearchResult] = useState<CompanySearch[]>([]);
  const [serverError, setServerError] = useState<string>("");

  const onClick = async (e: SyntheticEvent) => {
    const result = await searchCompanies(search);

    if (typeof result === "string") {
      setServerError(result);
      console.log("Server Error:", result);}
     else if (Array.isArray(result.data)) {
      await setSearchResult(result.data);
    }
  };
  useEffect( () => {
    console.log("Updated searchResult state:", searchResult);
  }, [searchResult]);

  const handleChange = (e : ChangeEvent<HTMLInputElement>) => {
      setSearch(e.target.value)
  }
  const onPortfolioCreate = (e: SyntheticEvent) => {
    e.preventDefault()
   console.log(e)
  }
  return (
    <div className="App">
      <Search search={search} handleChange={handleChange} onClick={onClick} />
      {serverError && <h1>{serverError}</h1>}
      <CardList searchResults={searchResult} onPortfolioCreate={onPortfolioCreate} />
    </div>
  );
}

export default App;
