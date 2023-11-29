import React from 'react'
import './Adminreg.css'
import { Link } from 'react-router-dom'

const Adminreg = () => {
  return (
    <div>
      <div className="adminreg-main">
        <div className="adminreg-card">
            <div className="admin-reg-card-heading"><h4>Admin Register</h4></div>
          <form action="" className='admin-reg-form'> 
          <div> <input type="text" placeholder='Full Name' /></div>
            <div><input type="text" placeholder='Username' /></div>
            <div><input type="password"  placeholder='Password'/></div>
            <button>Register</button>
            </form>
       
            <div  className='admn-reg-ihave-ac'><Link to='/adminlogin'>I have an account</Link></div>
        </div>
      </div>
    </div>
  )
}

export default Adminreg
