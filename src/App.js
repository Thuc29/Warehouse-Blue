import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePages from './pages/HomePages';
import { Container } from 'react-bootstrap';
import Login from './components/Login';
import {BrowserRouter,  Route, Routes} from 'react-router-dom';


function App() {
  return (
    <Container> 
      <BrowserRouter>
      <Routes>
        <Route  path="/" element={<HomePages />} />
        <Route  path="/auth/login" element={<Login />} />
      </Routes>
      </BrowserRouter>
     
      
    </Container>
  );
}

export default App;
