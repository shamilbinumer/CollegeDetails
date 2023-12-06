import React, { useEffect, useState } from 'react'
import './staffhome.css'
import { Link } from 'react-router-dom';

const Staffhome = () => {
const [username, setUsername] = useState('');

useEffect(() => {
  const storedUsername = localStorage.getItem('username');
  if (storedUsername) {
    // Remove double quotes from the stored username
    const cleanedUsername = storedUsername.replace(/"/g, '');
    setUsername(cleanedUsername);
  }
}, []);

  return (
    <div>
     <div className="mmm"><div className="admin-logout"><span><i className="fa fa-user" aria-hidden="true"></i>{username}</span><button>Logout</button> </div></div>
     <div className="div-stud-btns">
      <div className='stud-btn'><Link className='staffHome-studReg-btn' to='/studentreg'>Register Student</Link></div>
      <div><Link className='staffHome-studView-btn'>View All Students</Link></div>
     </div>
    </div>
   
  )
}

export default Staffhome
