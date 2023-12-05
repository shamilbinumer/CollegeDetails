import React, { useState } from 'react'
import './StaffForgotPwd.css'
import { Link } from 'react-router-dom'
import axios from 'axios'

const StaffForgotPwd = () => {
    const [val,setVal]=useState({})
    const handlechange=(e)=>{
        setVal({[e.target.name]:e.target.value})
        console.log(val);
    }
    const editPwd=async(e)=>{
        e.preventDefault()
        
    }
  return (
    <div>
     <div className="staff-forgot-card">
        <h5>Forgot Your Password</h5>
        <div className="staff-forgot-form">
          <div>
            <input type="text" placeholder='Registered Phone number'name='number' onChange={handlechange}/>
          </div>
          <div>
            <input type="text" placeholder='Registered Email'name='email' onChange={handlechange}/>
          </div>
          <div>
            <input type="password" placeholder='New password'name='password' onChange={handlechange} />
          </div>
          <button onClick={editPwd}>Change Password</button>
          <p></p>
          <div>
            <Link className='stf-frgt-usr' to='/stafflogin'>Back</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default StaffForgotPwd
