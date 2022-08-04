import React from 'react'
import './App.css'
import Home from './Component/Home/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Page1 from './Component/Pages/Page1';
import Page2 from './Component/Pages/Page2';
import Page3 from './Component/Pages/Page3';
import Page4 from './Component/Pages/Page4';
const App = () => {
  return (
    <div className='App'>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/Features" element={<Page1 />}/>
        <Route path="/Products" element={<Page2 />}/>
        <Route path="/HowitWorks" element={<Page3 />}/>
        <Route path="/ContactUs" element={<Page4 />}/>
        </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App;
