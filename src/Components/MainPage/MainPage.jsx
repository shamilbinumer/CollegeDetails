import React, { useRef, useState } from 'react'
import './MainPage.css'
import styled from 'styled-components'
import { Link, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
// import { useHistory } from 'react-router';



const MainPage = () => {
  // const {id}=useParams()
    const navigate=useNavigate()

const studentid=useRef()
const dob=useRef()
    const [showLoginForm, setShowLoginForm] = useState(false);

    const handleClick = () => {
      setShowLoginForm(!showLoginForm);
    };  

    const BackToMainPage = () => {
        setShowLoginForm(false);
      };

      const Login = async (e) => {
        e.preventDefault();
        try {
          const res = await axios.post("http://localhost:3041/college/studentlogin", {
            studentid: studentid.current.value,
            dob: dob.current.value,
          });
    
          const data = res.data;
          if (res.status >= 200 && res.status < 300) {
            const stud_token = data.token;
            localStorage.setItem("stud_token", JSON.stringify(stud_token));
            alert("Logged In Successfully");
            navigate('./studenthome')
          } else {
            console.error("Login failed with status code:", res.status);
            alert("Can't login. Check console for details.");
          }
        } catch (error) {
          console.error("Login error:", error);
          alert("Can't login. Check console for details.");
        }
      };
      
      






    
    const Pakage=styled.div`
        background: white !important;
        
    `


    const Navbar=styled.div`
      .navbar{
        background-color: #ffffff;
      }
      .navbar-brand img{
            width: 10%;
      }
      .navbar-nav{
        /* background-color: red; */
       padding-left: 30px;

      }
      .nav-link{
        font-weight: 800;
      }
      .navbar-brand div{
        margin-bottom: 0 !important;
        margin-top: 0 !important;
        font-size: 12px;
      }
      .navbar-brand .iss{
        font-weight: 800;
        letter-spacing: 17px;
      }
      .login-btn{
        background-color: #ffa41c;
        padding: 7px;
        width: 70px;
        margin-right: 10px;
        text-decoration: none;
        border-radius: 5px;
        color: #3f2705;
        font-weight: 800;
      }
    `

        const LoginFormOverlay = styled.div`
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.5);
        display: ${showLoginForm ? 'flex' : 'none'};
        justify-content: center;
        align-items: center;
        `;

        const LoginForm = styled.div`
       .card {
           width: 380px;
           padding: 1.9rem 1.2rem;
           text-align: center;
           background: #2a2b38;
        }
        
        /*Inputs*/
        .field {
          margin-top: .5rem;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: .5em;
          background-color: #1f2029;
          border-radius: 4px;
          padding: .5em 1em;
        }
        
        .input-icon {
          height: 1em;
          width: 1em;
          fill: #ffeba7;
        }
        
        .input-field {
          background: none;
          border: none;
          outline: none;
          width: 100%;
          color: #d3d3d3;
        }
        
        /*Text*/
        .title {
          margin-bottom: 1rem;
          font-size: 1.5em;
          font-weight: 500;
          color: #f5f5f5;
        }
        
        /*Buttons*/
        .btn {
          margin: 1rem;
          border: none;
          border-radius: 4px;
          font-weight: bold;
          font-size: .8em;
          text-transform: uppercase;
          padding: 0.6em 1.2em;
          background-color: #ffeba7;
          color: #5e6681;
          box-shadow: 0 8px 24px 0 rgb(255 235 167 / 20%);
          transition: all .3s ease-in-out;
        }
        
        .btn-link {
          color: #f5f5f5;
          display: block;
          font-size: .75em;
          transition: color .3s ease-out;
        }
        
        /*Hover & focus*/
        .field input:focus::placeholder {
          opacity: 0;
          transition: opacity .3s;
        }
        
        .btn:hover {
          background-color: #5e6681;
          color: #ffeba7;
          box-shadow: 0 8px 24px 0 rgb(16 39 112 / 20%);
        }
        
        .btn-link:hover {
          color: #ffeba7;
        }
        .login-back{
            text-decoration: none;
            color: #ffeba7;
        }

        `;

         const Banner=styled.div`
           .banner-content{
            /* background-color: red; */
            width: 50%;
            /* display: flex;
            align-items: center; */
            height: 500px;
            padding-top: 10%;
            padding-left: 8%;
            
           }
           .bnr-cntnt-sub{
            border-left: 2px solid #ffa41c;
                padding: 30px;
           }
           .banner-content h1{
            color: white;
            font-weight: 900;
            letter-spacing: 3px;
            font-size: 60px;
           }
           .banner-content p{
            color: #ffa41c;
            padding-top: 20px;
           }
           .our-academics{
            background-color: transparent;
            border: 2px solid white;
            padding: 7px 30px;
            text-decoration: none;
            color: #ffa41c;
            border-radius: 25px;
           }
           .ouracademics{
            padding-top: 30px;
           }
         `

         const About=styled.div`
         #about-us{
          padding-left: 2%;
          padding-bottom: 3%;
         }
         .about-main-div{
          display: flex;
         }
          .about-main-div h2{
            font-weight: 900;
            padding-top: 4%;
            font-size: 45px;
            color: #7c4e09;
          }
          .about-left img{
            width: 90%;
            padding-top: 7%;
          }
          .about-right{
            padding-top: 3%;
          }
          .about-right p{
            width: 90%;
          }
          .ul{
            width: 90%;
            border-bottom: 2px solid #7c4e0971;
            margin-top: 3% !important;
            margin: auto;
          }
          .icons{
            margin-top: 2%;
            display: flex;
            justify-content: center;
            gap: 90px;
          }
          .icons-sub{
            display: flex;
            align-items: center;
          }
          .icons-sub i{
            background-color: #7c4e09;
            padding: 13px;
            font-size: 20px;
            border-radius: 50%;
            color: #ffffff;
          }
          .icons-sub{
            font-weight: 600;
          }
          
         `

         const Courses=styled.div`
            .offerd-heading{
              text-align: center;
              color: #ffa41c;
              padding: 2%;
            }
            .offerd-heading h1{
              font-weight: 900;
              letter-spacing: 2px;
            }
            .list{
              display: flex;
              justify-content: center;
              color: #ffffff;
              /* background-color: yellow; */
            }
            .list p{
              width: 300px;
              text-align: center;
              background-color: #00000094;
              margin-right: 10px;
              padding: 20px 0px 20px 0px;
              border-radius: 5px;
              letter-spacing: 1px;
              font-size: 16px;
              font-weight: 800;
              border: 1px solid #ffa41c6c;
            }
         `
         const Footer=styled.div`
           footer {
               background: #16222A;
               background: -webkit-linear-gradient(59deg, #3A6073, #16222A);
               background: linear-gradient(59deg, #3A6073, #16222A);
               color: white;
               /* margin-top:100px; */
              }
              
              footer a {
                color: #fff;
                font-size: 14px;
                transition-duration: 0.2s;
              }
              
              footer a:hover {
                color: #FA944B;
                text-decoration: none;
              }
              
              .copy {
                font-size: 12px;
                padding: 10px;
                border-top: 1px solid #FFFFFF;
              }
              
              .footer-middle {
                padding-top: 2em;
                color: white;
              }
              
              
              /*SOCİAL İCONS*/
              
              /* footer social icons */
              
              ul.social-network {
                list-style: none;
                display: inline;
                margin-left: 0 !important;
                padding: 0;
              }
              
              ul.social-network li {
                display: inline;
                margin: 0 5px;
              }
              
              
              /* footer social icons */
              
              .social-network a.icoFacebook:hover {
                background-color: #3B5998;
              }
              
              .social-network a.icoLinkedin:hover {
                background-color: #007bb7;
              }
              
              .social-network a.icoFacebook:hover i,
              .social-network a.icoLinkedin:hover i {
                color: #fff;
              }
              
              .social-network a.socialIcon:hover,
              .socialHoverClass {
                color: #44BCDD;
              }
              
              .social-circle li a {
                display: inline-block;
                position: relative;
                margin: 0 auto 0 auto;
                -moz-border-radius: 50%;
                -webkit-border-radius: 50%;
                border-radius: 50%;
                text-align: center;
                width: 30px;
                height: 30px;
                font-size: 15px;
              }
              
              .social-circle li i {
                margin: 0;
                line-height: 30px;
                text-align: center;
              }
              
              .social-circle li a:hover i,
              .triggeredHover {
                -moz-transform: rotate(360deg);
                -webkit-transform: rotate(360deg);
                -ms--transform: rotate(360deg);
                transform: rotate(360deg);
                -webkit-transition: all 0.2s;
                -moz-transition: all 0.2s;
                -o-transition: all 0.2s;
                -ms-transition: all 0.2s;
                transition: all 0.2s;
              }
              
              .social-circle i {
                color: #595959;
                -webkit-transition: all 0.8s;
                -moz-transition: all 0.8s;
                -o-transition: all 0.8s;
                -ms-transition: all 0.8s;
                transition: all 0.8s;
              }
              
              .social-network a {
                background-color: #F9F9F9;
              }
         `
  return (
    <Pakage>
    <Navbar>
    <nav className="navbar navbar-expand-lg">
  <div className="container-fluid">
    <a className="navbar-brand" href="#"><div className='iss'>ISS</div><div className='college'>COLLEGE</div></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" href="#about-us">Abou Us</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" href="#">Admission</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" href='#offerd-courses'>Courses</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active">Contact</a>
        </li>
      </ul>
    </div>
  </div>
  <Link onClick={handleClick} className='login-btn'>Sign In</Link>
  
</nav>
    </Navbar>

    <LoginFormOverlay>
        <LoginForm>
        <div className="card">
  <h4 className="title">Student Sign In!</h4>
  <form>
    <div className="field">
      <input id="studenti" placeholder="Admission ID" ref={studentid}  className="input-field" name="studentid" type="text"/>
    </div>
    <div className="field">
      <input id="dob" placeholder="Date Of Birth" ref={dob} className="input-field" name="dob" type="text"  />
    </div>
    <Link><button onClick={Login} className="btn" type="submit">Sign In</button></Link>
    <div><Link className='login-back' onClick={BackToMainPage}>Back</Link></div> 
  </form>
</div>
        </LoginForm>
      </LoginFormOverlay>

<Banner>
    <div className="home-banner">
        <div className="banner-content">
           <div className="bnr-cntnt-sub">
           <h1>Iss Arts & Sceince<div>College</div></h1>
            <p>We don’t just prepare you for exams, We prepare for life..</p>
            <div className='ouracademics'><Link className='our-academics'>Our Academics</Link></div>
           </div>
        </div>
    </div>
</Banner>

<About>
      <section id='about-us'>
        
          
          <div className="about-main-div">
         <div className='about-left'>
         <img src="../../../public/medium-shot-graduate-student.jpg" alt="" className="about-img" />
         </div>
         
          
           <div className='about-right'>
           <h2>About Us</h2>
       
       <p>ISS Arts and Science College is a self- financing institution approved by the Govt. of Kerala and affiliated to the University of Calicut. The campus is located within Perinthalmanna Municipality at Ponniakurssi, 2km away from Perinthalmanna town. The campus is located in vast area, fortressed by mountains. The sylvan surroundings, serene atmosphere and the salubrious climate are the most conductive for the physical and mental growth and well-being of the students. The College is envisaged as a center of excellence in higher education in order to provide quality education with special thrust on moral and social values to mold a new generation of socially committed youth ready to work for materializing the dreams of a ‘knowledge society’</p>
          
           </div>
         
         
            </div>
            <div className="ul"></div>
        <div className="dddd">
        <div className="icons">
            <div className='icons-sub'>
            <div><i className="fa fa-building" aria-hidden="true"></i></div>
            <div className='icons-sub'>Management & <br/>Governance</div>
            </div>
            <div className='icons-sub'>
            <div><i className="fa fa-eye" aria-hidden="true"></i></div>
            <div className='icons-sub'>Our Vision and<br/>Mission</div>
            </div>
            <div className='icons-sub'>
            <div><i className="fa fa-graduation-cap" aria-hidden="true"></i></div>
            <div className='icons-sub'>Principal's<br/>Message</div>
            </div>
          </div>
        </div>
      </section>
</About>

<Courses>
  <section id="offerd-courses">
      <div className="courses-main">
       <div className="offerd-heading"> <h1>Programms Offered</h1>
       <p>Institution offers Post Graduate and Under Graduate programmes in various subjects</p></div>
       <div className="list">
        <div className="list-sub">
          <p>BCOM CO-OPERATION</p>
        </div>
        <div className="list-sub">
          <p>BCOM FINANCE</p>
        </div>
        <div className="list-sub">
          <p>B COM COMPUTER APPLICATION</p>
        </div>
        <div className="list-sub">
          <p>BBA</p>
        </div>
      </div>
      <div className="list">
        <div className="list-sub">
          <p>BA ENGLISH</p>
        </div>
        <div className="list-sub">
          <p>BA ECNOMICS</p>
        </div>
        <div className="list-sub">
          <p>BCA</p>
        </div>
        <div className="list-sub">
          <p>BCS PHYSICS</p>
        </div>
      </div>
      <div className="list">
        <div className="list-sub">
          <p>MA ENGLISH</p>
        </div>
        <div className="list-sub">
          <p>MCOM FINANCE</p>
        </div>
      </div>
      </div>

      
  </section>
</Courses>

<Footer>

<footer className="mainfooter" role="contentinfo">
  <div className="footer-middle">
  <div className="container">
    <div className="row">
      <div className="col-md-3 col-sm-6">
        {/* <!--Column1--> */}
        <div className="footer-pad">
          <h4>About Us</h4>
          <ul className="list-unstyled">
            <li><a href="#"></a></li>
            <li><a href="#">Islamic Service Society</a></li>
            <li><a href="#">ISS Group of Institutions</a></li>
            <li><a href="#">Contact Us</a></li>
            <li><a href="#">Location</a></li>
          </ul>
        </div>
      </div>
      <div className="col-md-3 col-sm-6">
        {/* <!--Column1--> */}
        <div className="footer-pad">
          <h4>Quick Links</h4>
          <ul className="list-unstyled">
            <li><a href="#">Download Brochure</a></li>
            <li><a href="#">Admission Procedure</a></li>
            <li><a href="#">Fee Structure</a></li>
            <li><a href="#">General Rules</a></li>
          </ul>
        </div>
      </div>
      <div className="col-md-3 col-sm-6">
        {/* <!--Column1--> */}
        <div className="footer-pad">
          <h4>Updates</h4>
          <ul className="list-unstyled">
            <li><a href="#">Photo Gallery</a></li>
            <li><a href="#">Latest News</a></li>
            <li><a href="#">Upcoming Events</a></li>
            <li><a href="#">Announcements</a></li>
            <li><a href="#">Career</a></li>
            <li>
              <a href="#"></a>
            </li>
          </ul>
        </div>
      </div>
      <div className="col-md-3">
        <h4>Follow Us</h4>
            <ul className="social-network social-circle">
             <li><a href="#" className="icoFacebook" title="Facebook"><i className="fa fa-facebook"></i></a></li>
             <li><a href="#" className="icoLinkedin" title="Linkedin"><i className="fa fa-linkedin"></i></a></li>
            </ul>       
    </div>
    </div>
  <div className="row">
    <div className="col-md-12 copy">
      <p className="text-center">copy Copyright 2018 - ISS Arts & Sceince College.  All rights reserved.</p>
    </div>
  </div>


  </div>
  </div>
</footer>
</Footer>

    </Pakage>
  )
}

export default MainPage
