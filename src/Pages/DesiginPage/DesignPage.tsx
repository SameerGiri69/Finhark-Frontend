import React from 'react'
import Table from '../../Components/Table/Table'
import RatioList from '../../Components/RatioList/RatioList'
import { CompanyKeyMetrics } from '../../../company'
import { formatLargeNonMonetaryNumber } from '../../Helpers/NumberFormatting'
import { testIncomeStatementData } from '../../Components/Table/testData'
import { config } from 'dotenv'

type Props = {}
const tableConfig = [
  {
    label: "Market Cap",
    render: (company: any) =>
    formatLargeNonMonetaryNumber(company.marketCapTTM),
    subTitle: "Total value of all a company's shares of stock",
  }
]
const DesignPage = (props: Props) => {
  return (
    <>
    <h1> NepTrade design page</h1>
    <h2>This is NepTrade's design page this is where we will house various design aspects of app</h2>
    <RatioList data={testIncomeStatementData} config={tableConfig}/> 
    <Table data={testIncomeStatementData} config={tableConfig} />
    </>
  )
}

export default DesignPage