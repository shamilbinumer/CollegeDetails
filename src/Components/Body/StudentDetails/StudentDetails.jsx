import React, { useEffect, useState } from 'react'
import './StudentDetails.css'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'

const StudentDetails = () => {
    const {id}=useParams()
    // console.log(id);
    const [getStudent,setStudent]=useState([])
    const [attentantace,setAttentantace]=useState()
    const fullData=async()=>{
        try {
            const res=await axios.post(`http://localhost:3041/college/getStudentdetails/${id}`)
            setStudent(res.data)
            console.log(getStudent);
        } catch (error) {
            console.log(error);
        }
    }
    
    useEffect(() => {
        fullData(id);
      }, [id]);  

     const getpersantage=()=>{
        let pers = (getStudent.attendance / 200) * 100;
        setAttentantace(pers)
        console.log(attentantace);
     }

     useEffect(()=>{
        getpersantage()
     },[])


  return (
    <div>
      <div className="stud-details-main-card">
        <div className="stud-details-main-card-left">
            <div className="stud-dp"><img src={getStudent.photo} alt="" /></div>
            <h4 className='stud-name'>{getStudent.name}</h4>
            <p className='stud-id'>{getStudent.studentid}</p>
            <div className="stud-edit">
                    <Link className='stud-edit-btn'>Edit</Link>
            </div>
        </div>
        <div className="stud-details-main-card-right">
            <table>
               <tr>
                    <th className='stud-details-th'>Added By</th>
                    <td className='stud-details-td'>: {getStudent.staff}</td>
               </tr>
               <tr>
                    <th className='stud-details-th'>Date of birth</th>
                    <td className='stud-details-td'>: {getStudent.dob}</td>
               </tr>
               <tr>
                    <th className='stud-details-th'>Phone</th>
                    <td className='stud-details-td'>: {getStudent.phone}</td>
               </tr>
               <tr>
                    <th className='stud-details-th'>Email Address</th>
                    <td className='stud-details-td'>: {getStudent.email}</td>
               </tr>
               <tr>
                    <th className='stud-details-th'>Address</th>
                    <td className='stud-details-td'>: {getStudent.address}</td>
               </tr>
               <tr>
                    <th className='stud-details-th'>Course</th>
                    <td className='stud-details-td'>: {getStudent.course}</td>
               </tr>
               <tr>
                    <th className='stud-details-th'>Batch</th>
                    <td className='stud-details-td'>: {getStudent.batch}</td>
               </tr>
               <tr>
                    <th className='stud-details-th'>Semester</th>
                    <td className='stud-details-td'>: {getStudent.sem}</td>
               </tr>
               <tr>
                    <th className='stud-details-th'>Attendance</th>
                    <td className='stud-details-td'>: {attentantace}%</td>
               </tr>
               <tr>
                    <th className='stud-details-th'>Internal Marks</th>
                    {/* <td className='stud-details-td'>: Che - {getStudent.internal.internalChe}</td> */}
               </tr>
               <tr>
                    <th className='stud-details-th'></th>
                    {/* <td className='stud-details-td'>: Phy - {getStudent.internal.internalPhy}</td> */}
               </tr>
               <tr>
                    <th className='stud-details-th'></th>
                    {/* <td className='stud-details-td'>: Math - {getStudent.internal.internalMath}</td> */}
               </tr>
               <tr>
                    <th className='stud-details-th'>Test Marks</th>
                    {/* <td className='stud-details-td'>: Che - {getStudent.test.testChe}</td> */}
               </tr>
               <tr>
                    <th className='stud-details-th'></th>
                    {/* <td className='stud-details-td'>: Phy - {getStudent.test.testPhy}</td> */}
               </tr>
               <tr>
                    <th className='stud-details-th'></th>
                    {/* <td className='stud-details-td'>: Math - {getStudent.test.testMath}</td> */}
               </tr>

            </table>
        </div>
      </div>
    </div>
  )
}

export default StudentDetails
