import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Task01 from './TaskPages/Task 01/Task01';
import App from './TaskPages/Task 02/App';
import Task03 from './TaskPages/Task 03/Task03';
import Task04 from './TaskPages/Task 04/Task04';
import Task05 from './TaskPages/Task 05/Task05';
import Task06 from './TaskPages/Task 06/Task06';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Nav className="me-auto">
            <Nav.Link as={Link} to={'/task01'}>Task 01</Nav.Link>
            <Nav.Link as={Link} to={'/task02'}>Task 02</Nav.Link>
            <Nav.Link as={Link} to={'/task03'}>Task 03</Nav.Link>
            <Nav.Link as={Link} to={'/task04'}>Task 04</Nav.Link>
            <Nav.Link as={Link} to={'/task05'}>Task 05</Nav.Link>
            <Nav.Link as={Link} to={'/task06'}>Task 06</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Routes>
        <Route path='/task01' element={<Task01/>}>Task 01</Route>
        <Route path='/task02' element={<App/>}>Task 02</Route>
        <Route path='/task03' element={<Task03/>}>Task 03</Route>
        <Route path='/task04' element={<Task04/>}>Task 04</Route>
        <Route path='/task05' element={<Task05/>}>Task 05</Route>
        <Route path='/task06' element={<Task06/>}>Task 06</Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
