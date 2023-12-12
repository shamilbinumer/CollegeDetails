import axios from 'axios';
import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';

const StudentHome = () => {
    const {id}=useParams()

    // const GetStudent=async()=>{
    //     const res=await axios.post(`http://localhost:3041/college/getstudentdetails/${id}`)
    //     console.log(res.data);
    // }

    // useEffect(()=>{
    //     GetStudent()
    // },[])

    // const GetName=()=>{
    //     const key = localStorage.key(0);
    //     const value = JSON.parse(localStorage.getItem(key));
        
    //     axios.get('http://localhost:3041/college/home', {
    //       headers: {
    //         Authorization: `Bearer ${value}`,
    //       },
    //     })
    //       .then((response) => {
    //         const { data } = response;
    //         const { msg } = data;
    //         document.getElementById("name").innerHTML = msg ? `${msg}` : "No message available";
    //       })
    //       .catch((error) => {
    //         console.error("Axios error:", error);
    //       });
    // }
    // useEffect(()=>{
    //     GetName()
    // },[])
  return (
    <div>
      <div id="name">sdfdsafdsfdsfdafdafdaf</div>
    </div>
  )
}

export default StudentHome
