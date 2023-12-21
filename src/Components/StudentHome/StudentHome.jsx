import axios from 'axios';
import  { React,useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './StudentHome.scss'

const StudentHome = () => {
  const navigate=useNavigate()
  const [student,setStudent]=useState({})

  const FullData = async () => {
    try { 
      // const key = localStorage.key(0);
      const value = JSON.parse(localStorage.getItem('stud_token'));
      // console.log('dstud token',value);
       const res = await axios.get("http://localhost:3041/college/getdetsilsloginedstudent",{headers: {Authorization: `Bearer ${value}` },});
       console.log(res);
      setStudent(res.data.task);
      console.log(res.data);
      console.log(res.data.task.name);
    } catch (error) { 
      console.log('Error fetching data:', error); 
    }
  };
  

  useEffect(() => {
    FullData();
  }, []);

    const Logout = () => {
      const confirmed = window.confirm("Are you sure you want to log out?");
      if (confirmed) {
          localStorage.clear();
          navigate("/")
    }

};
 
  return (
    <div className='studenthome'>
      <div className="upper">
      <div className="upper-left"><div className=''></div></div>
      <div className="upper-right">
      <div className="mmm"><div className="admin-logoutt"><div className='span'><span><i className="fa fa-user" aria-hidden="true"></i>{student.name}</span></div><div><button className="Btn" onClick={Logout}>
  
  <div className="sign"><svg viewBox="0 0 512 512"><path d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z"></path></svg></div>
  
  <div className="text">Logout</div>
</button></div></div></div>
      </div>
</div>
        <div className="details-main-card">
          <div className="details-main-card-left">
            <div className="stud-dp"><img src={student.photo} alt="" /></div>
            <div className="name"><h3>{student.name}</h3></div>
            <div className="id">{student.studentid}</div>
          </div>
          <div className="details-main-card-right">
          <table>
               <tr>
                    <th className='stud-details-th'>Added By</th>
                    <td className='stud-details-td'>: {student.staff}</td>
               </tr>
               <tr>
                    <th className='stud-details-th'>Date of birth</th>
                    <td className='stud-details-td'>: {student.dob}</td>
               </tr>
               <tr>
                    <th className='stud-details-th'>Phone</th>
                    <td className='stud-details-td'>: {student.phone}</td>
               </tr>
               <tr>
                    <th className='stud-details-th'>Email Address</th>
                    <td className='stud-details-td'>: {student.email}</td>
               </tr>
               <tr>
                    <th className='stud-details-th'>Address</th>
                    <td className='stud-details-td'>: {student.address}</td>
               </tr>
               <tr>
                    <th className='stud-details-th'>Course</th>
                    <td className='stud-details-td'>: {student.course}</td>
               </tr>
               <tr>
                    <th className='stud-details-th'>Batch</th>
                    <td className='stud-details-td'>: {student.batch}</td>
               </tr>
               <tr>
                    <th className='stud-details-th'>Semester</th>
                    <td className='stud-details-td'>: {student.sem}</td>
               </tr>
               <tr>
                    <th className='stud-details-th'>Attendance</th>
                    {/* {attentantace!==""?`${attentantace}%`:'Loading...'} */}
                    <td className='stud-details-td'>: {((student.attandance /200)*100)<75?`${((student.attandance /200)*100)}% Must Pay Condonation`:`${((student.attandance /200)*100)}%`}</td>
               </tr>
               <tr>
   <th className='stud-details-th'>Internal Marks</th>
   <td className='stud-details-td'>: Che - {student?.internal?.internalChe}</td>
</tr>
<tr>
   <td></td>
   <td className='stud-details-td'>: Phy - {student?.internal?.internalPhy}</td>
</tr>
<tr>
   <td></td>
   <td className='stud-details-td'>: Math - {student?.internal?.internalMath}</td>
</tr>
<tr>
   <th className='stud-details-th'>Test Marks</th>
   <td className='stud-details-td'>: Che - {student?.test?.testChe}</td>
</tr>
<tr>
   <td></td>
   <td className='stud-details-td'>: Phy - {student?.test?.testPhy}</td>
</tr>
<tr>
   <td></td>
   <td className='stud-details-td'>: Math - {student?.test?.testMath}</td>
</tr>


            </table>
          </div>
        </div>
    </div>
  )
}

export default StudentHome
