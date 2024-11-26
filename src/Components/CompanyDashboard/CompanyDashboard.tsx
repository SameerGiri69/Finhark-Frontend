import React from 'react'
import { Outlet } from 'react-router'

interface Props  {
children : React.ReactNode;
ticker: string;
}

const CompanyDashboard = ({children, ticker}: Props) => {
  return (
    <div className="relative md:ml-64 bg-blueGray-100 w-full">
    <div className="relative pt-20 pb-32 bg-lightBlue-500">
      <div className="px-4 md:px-6 mx-auto w-full">
        <div>
        <div className="flex flex-wrap">
          {/* this is here to display <Tile/> which is passed in from comapnypage.tsx */}
            {children}
          </div>
          <div className="flex flex-wrap">
            {/* displays incomeStatement, CashFlowStatement, BalanceSheet etc here in this outlet */}
            {<Outlet context={ticker} /> }
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default CompanyDashboard