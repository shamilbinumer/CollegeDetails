import React, { useEffect, useState } from 'react'
import './Staffdetails.css'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'

const Staffdetails = () => {
    const navigate=useParams()
    const {id}=useParams()
// console.log(id);
const [getStaff,setStaff]=useState([])
const fullData=async()=>{
    try {
        const res=await axios.post(`http://localhost:3041/college/getDetails/${id}`)
        setStaff(res.data)
        console.log(getStaff);
    } catch (error) {
        console.log(error);
    }
}

useEffect(() => {
    fullData(id);
  }, [id]);   

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
          navigate("/admin")
      }
     
    };

  return (
    <div>
        <div className="upper">
      <div className="upper-left"><div className=''><Link className='staffhome-back-btn' to='/adminhome'><i className="fa fa-angle-left" aria-hidden="true"></i>Back</Link></div></div>
      <div className="upper-right">
      <div className="mmm"><div className="admin-logoutt"><div className='span'><span><i className="fa fa-user" aria-hidden="true"></i>{username}</span></div><div><button className="Btn" onClick={Logout}>
  
  <div className="sign"><svg viewBox="0 0 512 512"><path d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z"></path></svg></div>
  
  <div className="text">Logout</div>
</button></div></div></div>
      </div>
</div>
      <div className="staffdetails-main-card">
        <div className="staffdetails-main-card-left">
            <div className="staffdp"><img src={getStaff.photo} alt="" /></div>
            <h3 className='staffdetails-name'>{getStaff.name}</h3>
            <p className='staffdetails-email'><i className="fa fa-envelope" aria-hidden="true"></i>{getStaff.email}</p>
            <Link className='staffdetails-edit-btn' to={`/staffedit/${id}`}>Edit</Link>
        </div>
        <div className="staffdetails-main-card-right">
          <table>
            <tr>
                <th className='staffdetails-th'>Added by</th>
                <td className='staffdetails-td'>: {getStaff.admin}</td>
            </tr>
            <tr>
                <th className='staffdetails-th'>Emp Id</th>
                <td className='staffdetails-td'>: {getStaff.empid}</td>
            </tr>
            <tr>
                <th className='staffdetails-th'>Phone</th>
                <td className='staffdetails-td'>: {getStaff.phone}</td>
            </tr>
            <tr>
                <th className='staffdetails-th'>Designation</th>
                <td className='staffdetails-td'>: {getStaff.designation}</td>
            </tr>
            <tr>
                <th className='staffdetails-th'>Salary</th>
                <td className='staffdetails-td'>: {getStaff.salary}</td>
            </tr>
            <tr>
                <th className='staffdetails-th'>Experience</th>
                <td className='staffdetails-td'>: {getStaff.expirience}</td>
            </tr>
            <tr>
                <th className='staffdetails-th'>Address</th>
                <td className='staffdetails-td'>: {getStaff.address}</td>
            </tr>
            
          </table>
        </div>
      </div>
    </div>
  )
}

export default Staffdetails
