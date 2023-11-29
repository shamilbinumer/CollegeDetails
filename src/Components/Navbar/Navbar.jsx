import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
     <nav className="navbar navbar-expand-lg">
  <div className="container-fluid">
    {/* <a className="navbar-brand" href="#">Navbar</a> */}
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          {/* <a className="nav-link active" aria-current="page" href="#">Home</a> */}
          <Link to='/' className='nav-link active'>Home</Link>
        </li>
        <li className="nav-item">
        <a className="nav-link active" aria-current="page" href="#">About Us</a>
        </li>
        <li className="nav-item">
        <a className="nav-link active" aria-current="page" href="#">Admission</a>
        </li>
        <li className="nav-item">
        <a className="nav-link active" aria-current="page" href="#">Contact Us</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar
