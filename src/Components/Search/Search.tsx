import React, { ChangeEvent, useState, SyntheticEvent } from 'react'

interface Props {}
// this function is taking in parameter of type Props which is what React.FC<Props> = (props : Props) means 
// and returning a jsx element which is just html and js code (jsx)
const Search : React.FC<Props> = (props : Props) : JSX.Element =>  {
    const [search, setSearch] = useState<string>("");


    const handleChange = (e : ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value)
        console.log(e);
    }
    const onClick = (e : SyntheticEvent)  => {
console.log(e)
    }
  return (
    <div>
        <input value={search} onChange={(e)=> handleChange(e)}></input>
        <button onClick={(e) => onClick(e)} >Click here</button>
    </div>
  )
}

export default Search