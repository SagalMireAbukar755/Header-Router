import React from "react";
import {Routes, Route} from 'react-router-dom'
import Home from '../pages/home'
import Features from '../pages/features'
import About from "../pages/about";
import Blogs from '../pages/blogs'

function App() {
  return (
    <>

    <Routes>

      <Route path="/" element={<Home/>}/>
      <Route path="/home" element={<Home/>}/>
      <Route path="/features" element={<Features/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/blogs" element={<Blogs/>}/>

    </Routes>
    
    
    </>
  );
}

export default App;
