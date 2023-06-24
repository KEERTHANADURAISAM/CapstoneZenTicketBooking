import React from 'react'
import './Default.css'
import { Button } from 'antd'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { BackwardOutlined } from '@ant-design/icons'
const DefaultNav = ({query,setQuery}) => {
  const [show,setShow] =useState(true);
  const createQuery=()=>{
    setShow(false)
    setQuery("");
  }
  return (
    <div className='default-nav'>
    {show ?<Link to='/portal/queries'>    
      <button className='defaultquery-btn' onClick={createQuery}>{query}</button>
      </Link>:
      <Link to='/portal/createquery'>    
      <button className='defaultquery-btn'><BackwardOutlined/>{query}</button>
      </Link>
      }

    </div>
  )
}

export default DefaultNav