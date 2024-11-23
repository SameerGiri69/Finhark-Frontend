import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { CompanyProfile } from '../../../company';
import { getCompanyProfile } from '../../api';
import Sidebar from '../../Components/Sidebar/Sidebar';
import CompanyDashboard from '../../Components/CompanyDashboard/CompanyDashboard';
import Tile from '../../Components/Tile/Tile';

interface Props  {}

const CompanyPage = (props: Props) => {
  //use params gets the query value from url
  let {ticker} = useParams();
  const [company, setCompany] = useState<CompanyProfile>();

  useEffect(() => {
    const getProfileAsync = async () =>
      {
        const result = await getCompanyProfile(ticker!)
        setCompany(result?.data[0])
      } 
      getProfileAsync();
      console.log(company);
  },[])

  return (
    <>
    <div className="w-full relative flex ct-docs-disable-sidebar-content overflow-x-hidden">
<Sidebar />
<CompanyDashboard> <Tile title='comapany name' subtitle={company?.companyName} /> </CompanyDashboard>
</div>
    
    </>
  )
}

export default CompanyPage