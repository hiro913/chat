import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from 'components/home'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

function App() {
  return (
    // <Router>
    <div className="App">
        <nav>
          <ul>
            <li><Link to="/home">Home</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route path='/home' Component={Home}></Route>
        </Routes>

      {/* <header className="App-header"> */}
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <p>
          Edit <code>src/App.tsx</code> and save to reload.!!
        </p>
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      {/* </header> */}
    </div>
    // </Router>
  );
}

export default App;
