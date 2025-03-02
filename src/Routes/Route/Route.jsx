import React from 'react'
import { Routes, Route, BrowserRouter } from "react-router-dom";
// import {Home} from '../../Pages/Home/home'
import SingFrom from '../../Pages/Signpage/Signpage';
import LoginForm from '../../Pages/Loginpage/Loginpage';
import AiModel from '../../Pages/AiModel/AiModel';
import FeedbackForm from '../../Pages/Feedback/Feedback';
// import {About} from '../../Pages/About/about'

const Routers = () => {
  return (
    <BrowserRouter >
    <Routes>
     <Route path="/" element={<LoginForm />} />
    {/* <Route path="/about" element={<About />} />
    <Route path="*" element={<NotFound />} /> */}
    <Route path="Singpage" element={<SingFrom/>} />
    <Route path="Dashboard" element={<AiModel/>} />
    <Route path="Feedback" element={<FeedbackForm/>} />
  </Routes>
    
    </BrowserRouter>
  )
}

export default Routers