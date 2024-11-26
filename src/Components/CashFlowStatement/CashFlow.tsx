import React, { useEffect, useState } from "react";
import { CompanyBalanceSheet, CompanyCashFlow } from "../../../company";
import { useOutletContext, useParams } from "react-router";
import { getCashFlowStatement } from "../../api";
import Table from "../Table/Table";
import { formatLargeMonetaryNumber } from "../../Helpers/NumberFormatting";
import Spinner from "../Spinner/Spinner";

type Props = {};

const config = [
  {
    label: "Date",
    render: (company: CompanyCashFlow) => company.date,
  },
  {
    label: "Operating Cashflow",
    render: (company: CompanyCashFlow) =>
      formatLargeMonetaryNumber(company.operatingCashFlow),
  },
  {
    label: "Investing Cashflow",
    render: (company: CompanyCashFlow) =>
      formatLargeMonetaryNumber(company.netCashUsedForInvestingActivites),
  },
  {
    label: "Financing Cashflow",
    render: (company: CompanyCashFlow) =>
      formatLargeMonetaryNumber(
        company.netCashUsedProvidedByFinancingActivities
      ),
  },
  {
    label: "Cash At End of Period",
    render: (company: CompanyCashFlow) =>
      formatLargeMonetaryNumber(company.cashAtEndOfPeriod),
  },
  {
    label: "CapEX",
    render: (company: CompanyCashFlow) =>
      formatLargeMonetaryNumber(company.capitalExpenditure),
  },
  {
    label: "Issuance Of Stock",
    render: (company: CompanyCashFlow) =>
      formatLargeMonetaryNumber(company.commonStockIssued),
  },
  {
    label: "Free Cash Flow",
    render: (company: CompanyCashFlow) =>
      formatLargeMonetaryNumber(company.freeCashFlow),
  },
];

const CashFlow = (props: Props) => {
  const [cashFlowData, setCashflowData] = useState<CompanyBalanceSheet[]>();
  const ticker = useOutletContext<string>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getCashFlowStatement(ticker!);
        result
          ? setCashflowData(result.data)
          : console.log("error fetching data");
      } catch (error) {
        if (error instanceof Error) {
          console.log("Error Message:", error.message);
        } else {
          console.log("An unexpected error occurred");
        }
      }
    };
    fetchData();
  }, []);

  return cashFlowData ? (
    <Table config={config} data={cashFlowData}></Table>
  ) : (
    <Spinner/>
  );
};

export default CashFlow;
