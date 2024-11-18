import React from 'react'
import "./Card.css";

interface Props {
  companyName: string;
  ticker: string;
  price:number; 
}

const Card : React.FC<Props> = ({companyName, ticker, price}: Props) : JSX.Element => {
  return (
    <div className='card'>
        <img src='https://images.unsplash.com/photo-1685392485351-f7d93de2231e?q=80&w=1895&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='logo'/>
        <div className='details' >
            <h2>{companyName} ({ticker})</h2>
            <p>${price}</p>
            <p className='infon'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, id?</p>
        </div>
    </div>
    
  )
}

export default Card