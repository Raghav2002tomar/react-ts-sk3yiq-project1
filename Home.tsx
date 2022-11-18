import * as React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Dropdown from 'react-bootstrap/Dropdown';
import Table from 'react-bootstrap/Table';
import Sidebar from './Sidebar';
import Nevbar from './Nevbar';
import Main from './Main';
import { Routes, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Product1 from './Product1';
import Product2 from './Product2';

export default function Home() {
  return (
    <div className="container">
      <Nevbar />
      <Sidebar />
      <Main />
      <Routes>
      
      <Route path="/" element={<Home/>}/>
      <Route path="Product1" element={<Product1/>}/>
      <Route path="Product2" element={<Product2/>}/>
     </Routes>
    </div>
  );
}
