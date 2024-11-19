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
    <div>
        <input value={search} onChange={(e)=> handleChange(e)}></input>
        <button onClick={(e) => onClick(e)} >Click here</button>
    </div>
  )
}

export default Search