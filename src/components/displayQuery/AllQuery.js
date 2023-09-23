import React, { useEffect, useState } from 'react'
import './AllQuery.css'
import axios from 'axios';
import { Button } from 'antd';
const AllQuery = () => {
  const [query,setQuery] =useState([]);
  const [isloading,setLoading] = useState(false);
  useEffect(()=>{
    loadStudent()
    },[]);
    const loadStudent=async()=>{
        setLoading(true)
    let queries=await axios.get("https://zen-server.onrender.com/all/queries")
    console.log(queries)
    setQuery(queries.data)
    console.log(query)
    setLoading(false)
    
    }
    function formatDate(dateString) {
      const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
      return new Date(dateString).toLocaleDateString(undefined, options);
    }
    
  return (
    <div className='all-main'>
           {isloading?<span>Loading...</span>:
           <div className='all-query'>
            {query.map((query,index)=>(
              <div  className='allquery-main-div' key={query.index}>
                <div>
                <p>QN13{index + 2078} -  <span>{query.title}</span> </p>
                <p>{query.category}</p>
                </div>
                <div className='quey-solve'>
                  <Button  className='query-solve-btn'>Closed</Button>
                  <span>{query.From}</span>
                  </div>
              </div>
  ))}
        <h1></h1>
        </div>
  }
    </div>
  )
}

export default AllQuery