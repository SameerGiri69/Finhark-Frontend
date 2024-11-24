import React from 'react'
import { TestDataCompany } from '../Table/testData'
import { render } from '@testing-library/react';

type Props = {}

const data = TestDataCompany[0]

type Company = typeof data;

const config =[
    {
        label: "Comapny name",
        render: (company : Company) => company.companyName,
        subtitle : "This is the comapny name"
    }
]

const RatioList = (props: Props) => {
    debugger;
    const renderedRows = config.map(row =>{
        return(
            <li className='py-3 sm:py-4'>
                <div className='flex items-center space-x-4' >
                    <div className='flex-1 min-w-0' ></div>
                    <p className='inline-flex items-center text-base font-semibold text-gray-900 ' > 
                        {row.render(data)}
                    </p>
                </div>
                <div className="text-sm font-medium text-gray-900 truncate">
                {row.label}
                </div>
                <p className='text-sm text-gray-500 truncate' >
                        {row.subtitle && row.subtitle}
                    </p>
            </li>
        )
    } )
  return (
    <div className='bg-white shadow rounded-lg mb-4 p-4 sm:p-6 h-full' >
<ul className='divide-y divided-gray-200' >{renderedRows}</ul>
    </div>
  )
}

export default RatioList