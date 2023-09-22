import React from 'react'
import home from './14284d_2cb43613a8c74caf8e18755236501525~mv2.gif';
import './Dashboard.css';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate()
   // All Queries
   const portal=()=>{
    navigate('/portal')
  }
  return (
    
    <div className='dash-container'>
        <div className='dash-text'>
            <h1 className='dash-text-note'>Welcome To Zen Query Portal</h1>
            <Button onClick={portal}>Get Started</Button>
        </div>
        <div className='dash-img-div'>
        <img src={home} className='dash-img'/>
        </div>
    </div>
    
  )
}

export default Dashboard