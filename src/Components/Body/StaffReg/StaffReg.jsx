import React from 'react'
import { Link } from 'react-router-dom'
import './StaffReg.css'

const StaffReg = () => {
  // let Photo="";
  // const [val,setVal]=useState({
  //   Empid:"",
  //   Name:"",
  //   Email:"",
  //   PhNumber:"",
  //   Address:"",
  //   Designation:"",
  //   Sallery:"",
  //   Expirience:""
  // })

  return (
    <div>
       <div className="staffreg-main">
        <div className="staffreg-card">
            <div className="staff-reg-card-heading"><h4>Staff Register</h4></div>
          <form action="" className='staff-reg-form'> 
          <div><input type="text" placeholder='Admin' /><input type="text" placeholder='Emp id' /></div>
          <div> <input type="text" placeholder='Full Name' /><input type="text" placeholder='Username' /></div>
            <div><input type="password"  placeholder='Password'/><input type="password"  placeholder='Conform password'/></div>
            <div><input type="email"  placeholder='Email'/><input type="text" placeholder='Phone number' /></div>
            <div> <input type="text" placeholder='Designation' /><input type="text" placeholder='Salary' /></div>
            <div> <input type="text" placeholder='Expirience' /><input type="text" placeholder='Address' /></div>
            <div><input type="file" placeholder='Image' className='file'/></div>
            <button>Register</button>
            </form>
        </div>
      </div>
    </div>
  )
}

export default StaffReg
