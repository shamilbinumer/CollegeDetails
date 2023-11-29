import './App.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar'
import Home from './Components/Body/Home/Home'
import AdminLogin from './Components/Body/AdminLogin/AdminLogin'
import StaffLogin from './Components/Body/StaffLogin/StaffLogin'
import StaffReg from './Components/Body/StaffReg/StaffReg'
import Adminpannel from './Components/Body/Adminpannel/Adminpannel'
import Adminreg from './Components/Body/Adminreg/Adminreg'

function App() {
  return (
    <>
    
    <BrowserRouter>
    <Navbar/>
    
    <Routes>
      <Route path='/' Component={Home}/>
      <Route path='/adminlogin' Component={AdminLogin}/>
      <Route path='/stafflogin' Component={StaffLogin}/>
      <Route path='/staffreg' Component={StaffReg}/>
      <Route path='/adminregister' Component={Adminreg}/>
      <Route path='/adminpannel' Component={Adminpannel}/>
    </Routes>
    
    </BrowserRouter>
    </>
  )
}

export default App
