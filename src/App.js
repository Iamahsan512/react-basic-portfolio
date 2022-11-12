import React from 'react';
// CSS 
import './App.css';

// Router Files 
import Home from './router/Home';
import About from './router/About';
import Project from './router/Project';
import Contact from './router/Contact';
import ErrorPage from './router/ErrorPage';

// React Router Dom 
import { Routes, Route } from 'react-router-dom';


function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/project' element={<Project />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/*' element={<ErrorPage />} />
      </Routes>
    </>
  );
}

export default App;
