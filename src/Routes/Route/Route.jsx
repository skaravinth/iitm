import React from 'react';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import SingFrom from '../../Pages/Signpage/Signpage';
import LoginForm from '../../Pages/Loginpage/Loginpage';
import Dashboard from '../../Pages/Dashboard/dashboard';
import Shoppinpage from '../../Pages/Shopping_page/page';
import Header from '../../Components/header/Header'; // Assuming the Header component is here

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
        {/* Route for Login and Signin (without Header) */}
        <Route path="/signin" element={<SingFrom />} />
        <Route path="/login" element={<LoginForm />} />
        
        {/* Routes that require Header */}
        <Route path="/Dashboard" element={<Layout><Dashboard /></Layout>} />
        <Route path="/shopping" element={<Layout><Shoppinpage /></Layout>} />
        
        {/* Add other routes as necessary */}
      </Routes>
    </BrowserRouter>
  );
}

export default Routers;
