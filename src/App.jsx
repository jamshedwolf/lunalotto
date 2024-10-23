import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Layout from './Layout';
import Services from './Services/Services';

import Termsofservices from './Services/Termsofservices';
import About from './Services/About';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />}  />
        <Route path="/services" element={<Services />}  />
        <Route path="Terms" element={<Termsofservices />}  />
        <Route path="/about" element={<About />}  />
      </Routes>
    </Layout>
  );
}

export default App;
