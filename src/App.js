import React from 'react'
import useSWR from 'swr'
import { fetcher } from './util';

const App = () => { 
  const { data, error } = useSWR('https://api.cortevaseedresearch.com/rest/mcrc/getCategoryMaster',  fetcher,{ refreshInterval  : 1000 });   
  if (error) {
    return <div>Error loading data</div>;
  } 
  if (!data) {
    return <div>Loading...</div>;
  }  
  return (
    <div>
    <h1>User List</h1>
    <select>
      {data.response.productCategory.map((product) => ( 
         <option key={product.productCategoryId}>{product.name}</option>
      ))}
    </select>
  </div>
  )
}

export default App