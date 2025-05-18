import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
// import App from './App.jsx';
import Welcome_Page from './Welcome_Page.jsx';
import Information_Page from './Information_Page.jsx';
import Layout from './Layout.jsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from './Dashboard.jsx';
import Home from './Home.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Welcome_Page />} />

        <Route path='/home' element={<Layout />}>

          <Route index element={<Home/>}/>
          <Route path='form' element={<Information_Page />} />

          <Route path='list' element={<Dashboard />} />

        </Route>

      </Routes>
    </BrowserRouter>
  </StrictMode>
);
