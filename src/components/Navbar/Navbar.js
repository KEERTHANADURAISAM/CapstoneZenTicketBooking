import { Avatar, Button, Input } from 'antd'
import { SearchOutlined, UserOutlined } from '@ant-design/icons';
import React from 'react'
import './Navbar.css'


const Navbar = () => {
  
  return (
   <>  
       <nav className='nav-bar'>
        <ul className='ul-nav'>
          <li><h3>Keerthana</h3></li>
          <li><Avatar size={54} icon={<UserOutlined />} /></li> 
        </ul>
      </nav>
      </>

     
  
  )
}

export default Navbar


