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
            <Link to="/">
              <h1>| Ben de Lusignan |</h1>
            </Link>
          </div>

          <nav>
            <ul id="navbar">
              <li>
                <Link to="/profile">Profile</Link>
              </li>
              <li>
                <Link to="/python">Python</Link>
              </li>
              <li>
                <Link to="/python">Java</Link>
              </li>
              <li>
                <Link to="/python">HTML/CSS/JS</Link>
              </li>
              <li>
                <Link to="/python">Other</Link>
              </li>
            </ul>
          </nav>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/python" element={<Python />} />
          </Routes>
        </Router>

        <footer id="footer">Ben de Lusignan | 2023</footer>
      </div>
    </body>
  );
};

export default App;
