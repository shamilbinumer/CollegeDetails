import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

const AdminSideStudentDetails = () => {
    const navigate=useNavigate()
    const [getStud,setStud]=useState([])
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

    const getAllstud=async()=>{
        const res=await axios.get("http://localhost:3041/college/getallstuds")
        setStud(res.data)
        console.log(getStud);
        
        
      }
      useEffect(()=>{
        getAllstud() 
    } ,[])

    const deleteStud = async (id) => {
        try {
          const confirmed = window.confirm("Are you sure you want to delete this staff member?");
      
          if (confirmed) {
            const res = await axios.delete(`http://localhost:3041/college/deletestudent/${id}`);
            console.log("deleted", res.data);
            getAllstud();
          } 
        } catch (error) {
          console.log(error);
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
      <div className="studentfulldetails-main container">
        <h3 className='allstud-heading'>Full Students</h3>
     <div className="row">
    {
        getStud.map((data,index)=>
        <div className="col-lg-3" key={index}>
        <Link className='card-link' to={`/adminstudfulldetails/${data._id}`}>
        <div className="stud-card" >
         <div className="stud-dp"><img src={data.photo} alt="" /></div>
         <h3 className='card-heading'>{data.name}</h3>
         <p className='card-para'>{data.email}</p>
         {/* <p className='card-para'>{data.empid}</p> */}
         <div className="allstuds-delete-view-btns">
             {/* <Link className='allstuds-view-btn'>View</Link> */}
             <Link className='allstuds-delete-btn' to={`#${data._id}`} onClick={() => deleteStud(data._id)}>Delete</Link>
         </div>
     </div>
     </Link>
     </div>)
    }
     </div>
      </div>
    </div>
  )
}

export default AdminSideStudentDetails
