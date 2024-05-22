import React from 'react';
import {Table} from 'antd'
import 'tailwindcss/tailwind.css';

const IpoListPage = () => {
    const handleOnClick = (ImageUrl,CompanyName) => {
        window.location.href = `/ipoDetails/?ImageUrl=${ImageUrl}&companyName=${CompanyName}`;
    }
    const columns = [
        {
          title: 'Company/issue date',
          dataIndex: 'CompanyDate',
          key: 'CompanyDate',
          render: (date,record) => 
          <div className='flex cursor-pointer' onClick={()=>handleOnClick(record.imageUrl,record.CompanyName)}>
            <img src={record.imageUrl} alt='Company Logo'  className='w-[50px] rounded-full border border-gray-300'/>
            <div className='flex flex-col ml-4 content-center'>
                <span className='font-bold'>{record.CompanyName}</span>
                <span className='text-xs'>{date}</span>
            </div>
          </div>,
        },
        {
          title: 'Issue Size',
          dataIndex: 'IssueSize',
          key: 'IssueSize',
          render: (price) => <span className='text-black font-bold'>₹ {price}</span>
        },
        {
          title: 'Price Range',
          dataIndex: 'PriceRange',
          key: 'PriceRange',
          render: (price) => <span className='text-black font-bold'>₹ {price}</span>
        },
        {
            title: 'Min invest/qty',
            dataIndex: 'investQty',
            key: 'investQty',
            render: (price,record) => 
            <div className='flex flex-col w-[30%] text-center'>
            <span className='text-black font-bold' >₹ {price}</span>
            <span className='text-xs'>{record.slots}</span>
          </div>,
          },
        
        
      ];
      
      const data = [
        {
          key: '1',
          imageUrl: 'https://asset.brandfetch.io/id5WK0jp1u/idmGTRd4no.jpeg',
          CompanyName:'GO AIR',
          CompanyDate: '4th-7th Oct 2022',
          IssueSize: '3600 Crores',
          PriceRange: '50-60',
          investQty: '50,000',
          slots:'100 shares/5 slots'
        },
        {
          key: '2',
          imageUrl: 'https://asset.brandfetch.io/idt3yFN3Dp/idl-f9Hy6W.jpeg',
          CompanyName:'BAJAJ ENERGY',
          CompanyDate: '4th-7th Oct 2022',
          IssueSize: '3600 Crores',
          PriceRange: '50-60',
          investQty: '50,000',
          slots:'100 shares/5 slots'
        },
        {
          key: '3',
          imageUrl: 'https://asset.brandfetch.io/idSXt7tZEr/idfqohTZyK.jpeg',
          CompanyName:'OYO',
          CompanyDate: '4th-7th Oct 2022',
          IssueSize: '3600 Crores',
          PriceRange: '50-60',
          investQty: '50,000',
          slots:'100 shares/5 slots'
        },
      ];
      
  return (
    <div className='px-4'>
        <p className='text-2xl font-semibold py-2'>IPO List</p>
        <div>
        <Table columns={columns} dataSource={data} className='border border-gray-200'/>
        </div>
    </div>
  );
}

export default IpoListPage;
