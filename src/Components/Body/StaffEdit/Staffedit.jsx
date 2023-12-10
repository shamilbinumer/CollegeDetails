import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';
import './Staffedit.css'

const Staffedit = () => {
  const naviagetout=useNavigate()
    const navigate=useNavigate()
    const {id}=useParams()
    // const [getStaff,setStaff]=useState([])
    let Photo="";
  const [val,setVal]=useState({
    admin:"",
    empid:"",
    name:"",
    username:"",
    password:"",
    confirmpassword:"",
    email:"",
    phone:"",
    designation:"",
    salary:"",
    expirience:"",
    address:"",
    photo:""
  })

  const getFulldata=async ()=>{
    const res=await axios.post(`http://localhost:3041/college/getDetails/${id}`)
    setVal(res.data)
  }
useEffect(()=>{
    getFulldata()
},[])

  const Getdata=(e)=>{ 
    setVal((pre)=>({...pre,[e.target.name]:e.target.value}))
    console.log(val);
  }

  function convertToBase64(file) {
    return new Promise((resolve, reject) => {
        const fileReader = new FileReader();
        fileReader.readAsDataURL(file);
  
        fileReader.onload = () => {
            resolve(fileReader.result)
        }
        fileReader.onerror = (error) => {
            reject(error)
        }
    })
  }

  const Upload=async(e)=>{
    e.preventDefault()
  
    Photo=await convertToBase64(e.target.files[0])
    console.log(Photo);
    setVal((pre)=>({...pre,[e.target.name]:Photo}))
  }


  const editStaff=async(e)=>{
    e.preventDefault()
   try {
    const res=await axios.patch(`http://localhost:3041/college/editstaff/${id}`,{...val})
    console.log(res.data);
   
    if(res.status==404){
      alert("Data Not Added")
    }else{
      alert("Seccussfully Edited")
      navigate(`/staffdetails/${id}`)
    }
   } catch (error) {
    alert("Data not added",error)
   }
    // console.log(res);
  }

  const [username, setUsername] = useState("");

    useEffect(() => {
      const storedUsername = localStorage.getItem("username");
      if (storedUsername) {
        setUsername(JSON.parse(storedUsername));
      }
    }, []);

    const Logout = () => {
      const confirmed = window.confirm("Are you sure you want to log out?");
      if (confirmed) {
          localStorage.clear();
          naviagetout("/admin")
      }
     
    };

  return (
    <div>
      <div className="upper">
      <div className="upper-left"><div className=''><Link className='staffhome-back-btn' to='/staffdetails'><i className="fa fa-angle-left" aria-hidden="true"></i>Back</Link></div></div>
      <div className="upper-right">
      <div className="mmm"><div className="admin-logoutt"><div className='span'><span><i className="fa fa-user" aria-hidden="true"></i>{username}</span></div><div><button className="Btn" onClick={Logout}>
  
  <div className="sign"><svg viewBox="0 0 512 512"><path d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z"></path></svg></div>
  
  <div className="text">Logout</div>
</button></div></div></div>
      </div>
     </div>
     <div className="staffreg-main">
        <div className="staffreg-card">
            <div className="staff-reg-card-heading"><h4>Edit Staff Details</h4></div>
          <form action="" className='staff-reg-form'> 
          <div>
              <input type="text" placeholder='Admin' name='admin' value={val.admin} onChange={Getdata} />
              <input type="text" placeholder='Emp id' onChange={Getdata}  value={val.empid} name='empid'/>
          </div>
          <div>
             <input type="text" placeholder='Full Name' name='name'   value={val.name} onChange={Getdata} />
             <input type="text" placeholder='Username' onChange={Getdata}  value={val.username} name='username'/>
          </div>
          {/* <div>
            <input type="password"  placeholder='Password' name='password'  onChange={Getdata} />
            <input type="password"  placeholder='Conform password' onChange={Getdata} name='confirmpassword'/>
          </div> */}
            <div>
              <input type="email"  placeholder='Email' name='email'  value={val.email} onChange={Getdata} />
              <input type="text" placeholder='Phone number' onChange={Getdata}  value={val.phone} name='phone'/></div>
            <div> 
              <input type="text" placeholder='Designation' name='designation'  value={val.designation}  onChange={Getdata} />
              <input type="text" placeholder='Salary' onChange={Getdata}  value={val.salary} name='salary'/></div>
            <div> 
              <input type="text" placeholder='Expirience' name='expirience'  value={val.expirience}  onChange={Getdata} />
              <input type="text" placeholder='Address' onChange={Getdata}  value={val.address} name='address'/></div>
            <div>
              <input type="file" placeholder='Image' className='file' onChange={Upload} name='photo'/>
            </div>
           <div> <img src={val.photo} alt="" className='dp' /></div>
            <button onClick={editStaff}>Edit</button>
            </form>
        </div>
      </div>
    </div>
  )
}

export default Staffedit
