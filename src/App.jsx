import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { Routes, Route } from 'react-router-dom';
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

import NavigationBar from './Components/layout/NavigationBar';
import Container from 'react-bootstrap/Container';

import HomePage from './Components/pages/Home';
import AboutPage from './Components/pages/About';
import ContactPage from './Components/pages/Contact';
import BlogPage from './Components/pages/Blog';
import ErrorPage from './Components/pages/Blog';


function App() {
  const [count, setCount] = useState(0)

  return (
    // <div className="Appa">
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
   
    


      
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      </Container>
       
    {/* </div> */}
 </>
     

  )
}

export default App
