import React, { useEffect, useState } from 'react'
import './ViewFullstudents.css'
import { Link } from 'react-router-dom'
import axios from 'axios'

const ViewFullStudents = () => {
    const [getStud,setStud]=useState([])

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
      <div className="studentfulldetails-main container">
        <h3 className='allstud-heading'>Full Students</h3>
     <div className="row">
    {
        getStud.map((data,index)=>
        <div className="col-lg-3" key={index}>
        <Link className='card-link' to={`/studentdetails/${data._id}`}>
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

export default ViewFullStudents
