import React from 'react';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import SingFrom from '../../Pages/Signpage/Signpage';
import LoginForm from '../../Pages/Loginpage/Loginpage';
import AiModel from '../../Pages/AiModel/AiModel';
import FeedbackForm from '../../Pages/Feedback/Feedback';
import Dashboard from '../../Pages/Dashboard/dashboard';
import Shoppinpage from '../../Pages/Shopping_page/page';
import Header from '../../Components/header/Header'; // Assuming the Header component is here
import DogTable from '../../Components/TableComponent/page';

const Layout = ({ children }) => (
  <div>
    <Header />
    {children}
  </div>
);

const Routers = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Singpage" element={<SingFrom />} />
        <Route path="/" element={<LoginForm />} />
        <Route path="/AiModel" element={<Layout><AiModel/></Layout>}/>
        <Route path="Feedback" element={<Layout><FeedbackForm/></Layout>} />
        <Route path="/Dashboard" element={<Layout><Dashboard /></Layout>} />
        <Route path="/shopping" element={<Layout><Shoppinpage /></Layout>} />
        <Route path='/History' element={<Layout><DogTable/></Layout>} />
        
        {/* Add other routes as necessary */}
      </Routes>
    </BrowserRouter>
  );
}

export default Routers;
