import React from 'react'
import { Routes, Route } from "react-router-dom";
import {Home} from '../../Pages/Home/home'
import {About} from '../../Pages/About/about'

const Routers = () => {
  return (
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="*" element={<NotFound />} /> {/* 404 Page */}
  </Routes>
  )
}

export default Routers