import React, { useEffect, useState } from 'react'
import './Studentreg.css'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const Studentreg = () => {
  const success = () =>
  toast.success("You Are Succesfuly Registered",{
   position: "top-right",
   autoClose:2500 ,
   hideProgressBar: false,
   closeOnClick: true,
   pauseOnHover: true, 
   draggable: true,
   progress: undefined, 
   theme:"dark",
 })
 const navigateout=useNavigate()
  const navigate=useNavigate()
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
        navigateout("/admin")
    }
     
    };

  let Photo="";
  const [val,setVal]=useState({
    staff:"",
    studentid:"",
    name:"",
    email:"",
    phone:"",
    address:"",
    dob:"",
    course:"",
    batch:"",
    sem:"",
    attandance:"",
    internal:{ 
      internalChe:"",
      internalPhy:"",
      internalMath:""
    },
   test:{
    testChe:"",
    testPhy:"",
    testMath:""
   },
    photo:""
  })

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
  }

  const Getdata=(e)=>{ 
    // console.log(e.target.value);
    setVal((pre)=>({...pre,[e.target.name]:e.target.value}))
    // console.log(val);
  }


  const GetTestmark = (e) => {
    setVal((pre) => ({...pre,test: { ...pre.test, [e.target.name]: e.target.value },}));
  };
  

  const GetInternalmark = (e) => {
    setVal((pre) => ({...pre,internal: { ...pre.internal, [e.target.name]: e.target.value },}));
  };

  const AddStudent=async(e)=>{
    e.preventDefault()
   try {
    const res=await axios.post("http://localhost:3041/college/addstudent",{...val,photo:Photo,staff:username})
    console.log(res.data);
    if(res.status!==404){
      success();
      setTimeout(()=>{
        navigate("/staffhome");
},3000);
     }
   } catch (error) {
    alert("error",error)
   }
   
    
  }
 

  return (
    <div>
      <div className="upper">
      <div className="upper-left"><div className=''><Link className='staffhome-back-btn' to='/staffhome'><i className="fa fa-angle-left" aria-hidden="true"></i>Back</Link></div></div>
      <div className="upper-right">
      <div className="mmm"><div className="admin-logoutt"><div className='span'><span><i className="fa fa-user" aria-hidden="true"></i>{username}</span></div><div><button className="Btn" onClick={Logout}>
  
  <div className="sign"><svg viewBox="0 0 512 512"><path d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z"></path></svg></div>
  
  <div className="text">Logout</div>
</button></div></div></div>
      </div>
     </div>
       <div className="studentreg-mainn">
        <div className="studentreg-card">
            <div className="student-reg-card-heading"><h4>Student Register</h4></div>
          <form action="" className='student-reg-form'> 
          <div> 
            <input type="text" placeholder='Student ID' name='studentid' onChange={Getdata}/>
            <input type="text" placeholder='Full Name' name='name' onChange={Getdata}/>
          </div>
              <div>
              <input type="text" placeholder='E mail'  name='email' onChange={Getdata}/>
              <input type="text"  placeholder='Phone' name='phone' onChange={Getdata}/>
              </div>
              <div><input type="text" placeholder='Address' className='address' name='address'onChange={Getdata} /></div>
            <div><input type="date" placeholder='Date Of Birth' name='dob' onChange={Getdata}/>
            <select name="course" id="" onChange={Getdata}>
              <option value="Select Course">Select Course</option>
              <option value="Computer Science">Computer Science</option>
              <option value="BA English">BA English</option>
              <option value="BBA">BBA</option>
              <option value="B Com">B Com</option>
              </select>
              </div>
            <div>
              <input type="text" placeholder='Batch' className='batch-sem-at' name='batch' onChange={Getdata}/>
              {/* <input type="text" placeholder='Semester' className='batch-sem-at'/> */}
              <select name="sem" id="" className='batch-sem-at' onChange={Getdata}>
              <option value="select sem">Select sem</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              </select>
              <input type="text" placeholder='Attendance out of 200 working days' className='batch-sem-at' name='attandance' onChange={Getdata}/>
              </div>
             <div className="internal"><label htmlFor="">Internal Marks</label></div>
              <div className='internal-mark'>
                <label htmlFor="">Chemistry : </label>
                <input type="text" className='sub-mark' name='internalChe' onChange={GetInternalmark}/>
                <label htmlFor="">Physics : </label>
                <input type="text" className='sub-mark' name='internalPhy' onChange={GetInternalmark}/>
                <label htmlFor="">Maths : </label>
                <input type="text" className='sub-mark' name='internalMath' onChange={GetInternalmark}/>
              </div>
              <div className="internal"><label htmlFor="">Test Score</label></div>
              <div className='internal-mark'>
                <label htmlFor="">Chemistry : </label>
                <input type="text" className='sub-mark' name='testChe' onChange={GetTestmark}/>
                <label htmlFor="">Physics : </label>
                <input type="text" className='sub-mark' name='testPhy' onChange={GetTestmark}/>
                <label htmlFor="">Maths : </label>
                <input type="text" className='sub-mark' name='testMath' onChange={GetTestmark}/>
              </div>
              <div>
                <input type="file" className='file' name='photo' onChange={Upload} />
              </div>
              <div className='stude-dp'><img src={val.photo} alt="" /></div>
            <button onClick={AddStudent}>Register</button>
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
       
            {/* <div  className='admn-reg-ihave-ac'><Link to='/studentlogin'>I have an account</Link></div> */}
        </div>
      </div>
    </div>
  )
}

export default Studentreg
