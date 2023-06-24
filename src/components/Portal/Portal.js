import React from 'react'
import Navbar from '../Navbar/Navbar'
import MyQuery from '../QueryPortal/MyQuery'
import { Outlet } from 'react-router-dom'
import DefaultNav from '../Navbar/DefaultNav'
import Sidebar from '../Sidebar/Sidebar'
import Dashboard from '../Dashboard/Dashboard'


const Portal = ({query,setQuery}) => {
  return (
    <div>
      
        <Navbar/>
        <Sidebar/>
        
        {/* <DefaultNav query={query} setQuery={setQuery}/>   */}
        
        <Outlet/>
    </div>
  )
}

export default Portal