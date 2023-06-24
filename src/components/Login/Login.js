import React from 'react';
import './Login.css';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className='bg-color'>
        <form className='login-form'>
           <h1 className='login-header'>ZEN CLASS</h1>
            <label className='login-lable'>Email</label>
            <input type="text" className='login-input' required/>
            <label className='login-lable'>Password</label>
            <input type="password" className='login-input' required/>
            <Link to='/portal'>
            <button className='login-btn'>Login</button>
            </Link>
            <lable className='login-lable-pwd'>Forgot Password?</lable>
        </form>
   
    </div>
  )
}

export default Login