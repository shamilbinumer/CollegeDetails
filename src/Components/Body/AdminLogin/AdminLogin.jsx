import React from 'react'
import './AdminLogin.css'

const AdminLogin = () => {
  return (
    <div>
       <div className="adminlogin-main">
        <div className="adminlogin-card">
            <div className="admin-reg-card-heading"><h4>Admin Login</h4></div>
          <form action="" className='admin-reg-form'> 
            <div><input type="text" placeholder='Username' /></div>
            <div><input type="password"  placeholder='Password'/></div>
            <button>Login</button>
            </form>
        </div>
      </div>
    </div>
  )
}

export default AdminLogin
