import React, { useEffect, useState } from 'react'
import './Allstaflist.css'
import { Link } from 'react-router-dom'
import axios from 'axios'

const Allstafflist = () => {
    const [getStaff,setStaff]=useState([])
    const getAllstaff=async()=>{
      const res=await axios.get("http://localhost:3041/college/getfullstaff")
      setStaff(res.data)
      console.log(getStaff);
      
      
    }
    useEffect(()=>{
        getAllstaff() 
    } ,[])
  return (
    <div>
      <div className="allstafflist-heading">
        <h2>All Staffs</h2>
      </div>
      <div className="list-of-staffs container">
        <div className="row">
          
              {
                 getStaff.map((data,index)=>
                   <div className="col-lg-3" key={index}>
                    <div className="staff-card" >
                    <div className="staff-dp"><img src={data.photo} alt="" /></div>
                    <h3 className='card-heading'>{data.name}</h3>
                    <div className="allstaff-delete-view-btns">
                        <Link className='allstaff-view-btn'>View</Link>
                        <Link className='allstaff-delete-btn'>Delete</Link>
                    </div>
                </div>
                 </div>
                  )
              }
           

        </div>
      </div>
    </div>
  )
}

export default Allstafflist
