import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import { Card } from './Components/Card';
import NavigationBar from './Components/layout/NavigationBar';
import Container from 'react-bootstrap/Container';

import HomePage from './Components/pages/Home';
import AboutPage from './Components/pages/About';
import ContactPage from './Components/pages/Contact';
import BlogPage from './Components/pages/Blog';
import ErrorPage from './Components/pages/Blog';

export default function App() {
  return (
    <>
     
        <NavigationBar />
        
        <Container>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/blog" element={<BlogPage />} />
          <Route exact path="/contact" element={<ContactPage />} />
          <Route exact path="/about" element={<AboutPage />} />
          {/*<Route>
          <ErrorPage />
        </Route> */}
        </Routes>
      
       
      </Container>
    </>
  );
}
