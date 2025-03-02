import React from 'react'
import { Routes, Route, BrowserRouter } from "react-router-dom";
// import {Home} from '../../Pages/Home/home'
import SingFrom from '../../Pages/Signpage/Signpage';
import LoginForm from '../../Pages/Loginpage/Loginpage';
import Dashboard from '../../Pages/Dashboard/dashboard';
import Shoppinpage from '../../Pages/Shopping_page/page'
// import {About} from '../../Pages/About/about'

const Routers = () => {
  return (
    <BrowserRouter >
    <Routes>
     <Route path="/" element={<LoginForm />} />
    {/* <Route path="/about" element={<About />} />
    <Route path="*" element={<NotFound />} /> */}
    <Route path="Singpage" element={<SingFrom/>} />
    <Route path="Dashboard" element={<Dashboard/>} />
    <Route path="Shoppingpage" element={<Shoppinpage />}/>
  </Routes>
    
    </BrowserRouter>
  )
}

export default Routers