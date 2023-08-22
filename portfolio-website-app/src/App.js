import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Python from "./components/Python/Python.js";
import Homepage from "./components/Homepage/Homepage.js";
import Profile from "./components/Profile/Profile.js";
import "./App.css";

const App = () => {
  return (

      <body>
      <div id="container">
        <Router>
        <div id="headerLink">
        <Link to="/"><h1>| Ben de Lusignan |</h1></Link>
        </div>
        
          <nav>
            <ul id="navbar">
              <li>
                <Link to="/profile">Profile</Link>
              </li>
              <li>
                <Link to="/python">Python</Link>
              </li>
            </ul>
          </nav>
          <Routes>
            <Route path="/profile" element={<Profile />} />
            <Route path="/python" element={<Python />} />
            <Route path="/" element={<Homepage />} />
          </Routes>
        </Router>

        <footer id="footer">
          Ben de Lusignan | 2023
        </footer>
        </div>
      </body>

  );
};

export default App;
