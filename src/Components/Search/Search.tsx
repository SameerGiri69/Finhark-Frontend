import React from 'react'

interface Props {}
// this function is taking in parameter of type Props which is what React.FC<Props> = (props : Props) means 
// and returning a jsx element which is just html and js code (jsx)
const Search : React.FC<Props> = (props : Props) : JSX.Element =>  {
  return (
    <div>Search</div>
  )
}

export default Search