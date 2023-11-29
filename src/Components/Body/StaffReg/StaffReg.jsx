import React from 'react'
import { Link } from 'react-router-dom'
import './StaffReg.css'

const StaffReg = () => {
  return (
    <div>
       <div className="staffreg-main">
        <div className="staffreg-card">
            <div className="staff-reg-card-heading"><h4>Staff Register</h4></div>
          <form action="" className='staff-reg-form'> 
          <div> <input type="text" placeholder='Full Name' /></div>
            <div><input type="text" placeholder='Username' /></div>
            <div><input type="password"  placeholder='Password'/></div>
            <button>Register</button>
            </form>
       
            <div  className='admn-reg-ihave-ac'><Link to='/stafflogin'>I have an account</Link></div>
        </div>
      </div>
    </div>
  )
}

export default StaffReg
