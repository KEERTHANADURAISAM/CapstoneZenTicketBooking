import React from 'react'
import home from './0ced4fa58f04d8c855c082d8c8738eb1.webp';
import './Dashboard.css';
const Dashboard = () => {
  return (
    <div className='dash-container'>
        <div className='dash-text'>
            <h1 className='dash-text-note'>Welcome To Zen Query Portal</h1>
        </div>
        <div className='dash-img-div'>
        <img src={home} className='dash-img'/>
        </div>
    </div>
  )
}

export default Dashboard