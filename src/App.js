import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import About from './components/About';
import Homes from './components/Homes';
import Contact from './components/Contact';
import Navbar from './components/Navbar';

function App(){
  return(
    <>
        <BrowserRouter>
        <Navbar/>
          <Routes>
            <Route path="/"  element={<Homes/>}/>
            <Route path="/about"  element={<About/>}/>
            <Route path="/contact"  element={<Contact/>}/>
          </Routes>
        </BrowserRouter>
    </>
  );
}

  export default App;
