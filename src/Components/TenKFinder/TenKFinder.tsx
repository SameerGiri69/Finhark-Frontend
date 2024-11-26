import React, { useEffect, useState } from "react";
import type { CompanyTenK } from "../../../company";
import { getTenK } from "../../api";
import { useOutletContext } from "react-router";
import Spinner from "../Spinner/Spinner";
import TenKFinderItem from "../TenKFinderItem/TenKFinderItem";
type Props = {
  ticker: string;
};

const TenKFinder = (props: Props) => {
  const [companyData, setCompanyData] = useState<CompanyTenK[]>();
  const ticker = useOutletContext<string>();

  useEffect(() => {
    const fetchData = async () => {
      const result = await getTenK(ticker);
      setCompanyData(result?.data);
    };
    fetchData();
  }, [ticker]);
  return (
    <div className="inline-flex rounded-md shadow-sm m-4">
      {companyData ? (
        companyData?.slice(0, 5).map((tenK) => {
          return <TenKFinderItem tenK={tenK} />;
        })
      ) : (
        <Spinner />
      )}
    </div>
  );
};

export default TenKFinder;
