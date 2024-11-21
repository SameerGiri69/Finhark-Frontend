import React, { ChangeEvent, useState, SyntheticEvent } from 'react'

interface Props {
  onClick : (e: SyntheticEvent) => void,
  handleChange: (e : ChangeEvent<HTMLInputElement>) => void;
  search : string | undefined
}
// this function is taking in parameter of type Props which is what React.FC<Props> = (props : Props) means 
// and returning a jsx element which is just html and js code (jsx)
const Search : React.FC<Props> = ({onClick, handleChange, search} : Props) : JSX.Element =>  {
    
  return (
    <div className="flex items-center border-2 rounded-lg p-2 space-x-3 max-w-sm mx-auto shadow-lg">
    {/* Search input */}
    <input
      value={search}
      onChange={(e) => handleChange(e)}
      className="flex-1 p-3 border-2 rounded-lg text-gray-700 placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all"
      id="search-input"
      placeholder="Search companies"
    />
    
    {/* Search button */}
    <button
      onClick={(e) => onClick(e)}
      className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 transition-all"
    >
      Search
    </button>
  </div>
  
  )
}

export default Search