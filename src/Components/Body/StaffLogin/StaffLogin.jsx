import React, { useState } from 'react'
import {  Link, useNavigate } from 'react-router-dom'
import './StaffLogin.css'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const StaffLogin = () => {
  const success = () =>
  toast.success("You Are Succesfuly Logined",{
   position: "top-right",
   autoClose:2500 ,
   hideProgressBar: false,
   closeOnClick: true,
   pauseOnHover: true, 
   draggable: true,
   progress: undefined, 
   theme:"dark",
 })
  const navigate=useNavigate()
  const [username,setUsername]=useState('')
  const [password,setPassword]=useState('')
  

  const Login=async(e)=>{
    e.preventDefault()
    try {
      const res=await axios.post("http://localhost:3041/college/stafflogin",{
        username:username,
        password:password
      })
      console.log(res.status);
      const data=res.data;
      console.log(data);
      if (res.status !== 404) {
        const staff_token = data.token;
        // const staff_username = data.username;
        localStorage.setItem("token", JSON.stringify(staff_token));
        localStorage.setItem("username", JSON.stringify(username));
        success();
        setTimeout(()=>{
          navigate("/staffhome");
  },3000);
      }
    } catch (error) {
      alert("cant't Login",error)
    }
  }
  return (
    <div>
       <div className="stafflogin-main">
        <div className="stafflogin-card">
            <div className="staff-login-card-heading"><h4>Staff Login</h4></div>
          <form action="" className='staff-login-form'> 
            <div><input type="text" placeholder='Username' onChange={(e)=>setUsername(e.target.value)}/></div>
            <div><input type="password"  placeholder='Password' onChange={(e)=>setPassword(e.target.value)}/></div>
            <div className='forgot-pwd-div'>
          <div><Link className='forgot-pwd' to='/staffforgotusername'>Forgot Username</Link></div>
          <div><Link className='forgot-pwd' to='/staffforgotpwd'>Forgot Password</Link></div>
              </div>
            <button onClick={Login}>Login</button>
            <ToastContainer
                            position="top-right"
                            autoClose={5000}
                            hideProgressBar={false}
                            newestOnTop={false}
                            closeOnClick
                            rtl={false}
                            pauseOnFocusLoss
                            draggable
                            pauseOnHover
                            theme="dark"
              />
            </form>
        </div>
      </div>
    </div>
  )
}

export default StaffLogin
