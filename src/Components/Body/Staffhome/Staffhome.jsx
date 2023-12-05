import React, { useEffect, useState } from 'react'
// import { useLocation } from 'react-router-dom';
import './staffhome.css'

const Staffhome = () => {
  // const [username, setUsername] = useState("");

  // useEffect(() => {
  //   const storedUsername = localStorage.getItem("username");
  //   if (storedUsername) {
  //     setUsername(JSON.parse(storedUsername));
  //   }
  // }, []);

  const [username, setUsername] = useState('');

// useEffect(() => {
//   const storedUsername = localStorage.getItem('username');
//   if (storedUsername) {
//     setUsername(storedUsername);
//   }
// }, []);

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
      JHVHJGV
     <div className="mmm"><div className="admin-logout"><span><i className="fa fa-user" aria-hidden="true"></i>{username}</span><button>Logout</button> </div></div>
    </div>
  )
}

export default Staffhome
