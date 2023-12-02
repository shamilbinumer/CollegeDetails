import React from 'react'
import './Adminhome.css'
import { Link, useLocation } from 'react-router-dom'
// import { Link } from 'react-router-dom'


const Adminhome = () => {
    const location=useLocation()
    const username = location.state && location.state.username;
  return (
    <div>
      <div className="adminhome-main">
        <div className="admin-view-text">
        <h5>Admin : {username}</h5>
        </div>
        <div className="admin-home-details">
          <div className="admin-home-details-left">
            <div className="view-full-staffs">
              <Link className='view-all-staff-btn' to='/allstafflist'>View All Staffs  <i className="fa fa-angle-right" aria-hidden="true"></i></Link>
              <div className="adminhome-reg-staff-btn">
              <Link to='/staffreg' className='adminhome-reg-staff-button'>Register new staff</Link>
              </div>
            </div>
          </div>
          <div className="admin-home-details-right">
          <div className="view-full-students"></div>
          </div>
        </div>
        {/* <Link to='/staffreg'>Register staff</Link> */}
      </div>
    </div>
  )
}

export default Adminhome
