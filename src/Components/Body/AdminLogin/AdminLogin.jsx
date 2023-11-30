import React, { useState } from 'react'
import './AdminLogin.css'
import { Link } from 'react-router-dom'

const AdminLogin = () => {
const [val,setVal]=useState({
  username:"",
  password:""
})

const Getdata=(e)=>{ 
  setVal((pre)=>({...pre,[e.target.name]:e.target.value}))
  console.log(val);
}

const Login=()=>{

}

  return (
    <div>
       <div className="adminlogin-main">
        <div className="adminlogin-card">
            <div className="admin-reg-card-heading"><h4>Admin Login</h4></div>
          <form action="" className='admin-reg-form'> 
            <div><input type="text" placeholder='Username' name='username' onChange={Getdata} /></div>
            <div><input type="password"  placeholder='Password' name='password' onChange={Getdata}/></div>
            <button onClick={Login}>Login</button>
            <div className='reg-btn'><Link to='/adminregister' className='regbtn'>Back</Link></div>
            </form>
        </div>
      </div>
    </div>
  )
}

export default AdminLogin
