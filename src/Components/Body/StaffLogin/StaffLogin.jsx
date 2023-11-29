import React from 'react'
import { Link } from 'react-router-dom'
import './StaffLogin.css'

const StaffLogin = () => {
  return (
    <div>
       <div className="stafflogin-main">
        <div className="stafflogin-card">
            <div className="staff-login-card-heading"><h4>Staff Login</h4></div>
          <form action="" className='staff-login-form'> 
            <div><input type="text" placeholder='Username' /></div>
            <div><input type="password"  placeholder='Password'/></div>
            <button>Login</button>
            </form>
        </div>
      </div>
    </div>
  )
}

export default StaffLogin
