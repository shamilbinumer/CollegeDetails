import './App.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
// import Navbar from './Components/Navbar/Navbar'
import Home from './Components/Body/Home/Home'
import AdminLogin from './Components/Body/AdminLogin/AdminLogin'
import StaffLogin from './Components/Body/StaffLogin/StaffLogin'
import StaffReg from './Components/Body/StaffReg/StaffReg'
import Adminreg from './Components/Body/Adminreg/Adminreg'
import Adminhome from './Components/Body/Adminhome/Adminhome'
import Studentreg from './Components/Body/Studentreg/Studentreg'
import Studentlogin from './Components/Body/Studentlogin/Studentlogin'
import Staffhome from './Components/Body/Staffhome/Staffhome'
import Allstafflist from './Components/Body/Allstafflist/Allstafflist'
import Staffedit from './Components/Body/StaffEdit/Staffedit'
import Staffdetails from './Components/Body/Staffdetails/Staffdetails'
import StaffForgotusername from './Components/staffForgoteusername/StaffForgotusername'
import StaffForgotPwd from './Components/StaffForgotPwd/StaffForgotPwd'
import ViewFullStudents from './Components/ViewFullStudents/ViewFullStudents'
import StudentDetails from './Components/Body/StudentDetails/StudentDetails'
import StudentEdit from './Components/StudentEdit/StudentEdit'
import MainPage from './Components/MainPage/MainPage'
import StudentHome from './Components/StudentHome/StudentHome'
import AdminSideStudentDetails from './Components/Body/AdminSideStudentDetails/AdminSideStudentDetails'
import AdminsideStudFullDetails from './Components/Body/AdminsideStudFullDetails/AdminsideStudFullDetails'

function App() {
  return (
    <>
    <BrowserRouter>
    {/* <Navbar/> */}
    <Routes>
      <Route path='/' Component={MainPage}/>
      <Route path='/admin' Component={Home}/>
      <Route path='/adminlogin' Component={AdminLogin}/>
      <Route path='/stafflogin' Component={StaffLogin}/>
      <Route path='/staffreg' Component={StaffReg}/>
      <Route path='/adminregister' Component={Adminreg}/>
      <Route path='/adminhome' Component={Adminhome}/>
      <Route path='/studentreg' Component={Studentreg}/>
      <Route path='/studentlogin' Component={Studentlogin}/>
      <Route path='/staffhome' Component={Staffhome}/>
      <Route path='/allstafflist' Component={Allstafflist}/>
      <Route path='/staffdetails/:id' Component={Staffdetails}/>
      <Route path='/staffforgotusername' Component={StaffForgotusername}/>
      <Route path='/staffedit/:id' Component={Staffedit}/>
      <Route path='/staffforgotpwd' Component={StaffForgotPwd}/>
      <Route path='/viewfullstudents' Component={ViewFullStudents}/>
      <Route path='/studentdetails/:id' Component={StudentDetails}/>
      <Route path='/studentedit/:id' Component={StudentEdit}/>
      <Route path='/studenthome' Component={StudentHome}/>
      <Route path='/adminsidefullstudent' Component={AdminSideStudentDetails}/>
      <Route path='/adminstudfulldetails/:id' Component={AdminsideStudFullDetails}/>


    </Routes>
    
    </BrowserRouter>
    </>
  )
}

export default App
