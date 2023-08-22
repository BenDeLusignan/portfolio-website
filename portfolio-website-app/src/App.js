import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Homepage from "./components/Homepage/Homepage.js";
import Profile from "./components/Profile/Profile.js";
import Python from "./components/Python/Python.js";
import Java from "./components/Java/Java.js";
import HCJ from "./components/HTML-CSS-JS/Html-css-js.js";
import OtherInterests from "./components/Other-interests/Other-interests.js"
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
                <Link to="/java">Java</Link>
              </li>
              <li>
                <Link to="/hcj">HTML/CSS/JS</Link>
              </li>
              <li>
                <Link to="/other">Other Interests</Link>
              </li>
            </ul>
          </nav>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/python" element={<Python />} />
            <Route path="/java" element={<Java />} />
            <Route path="/hcj" element={<HCJ />} />
            <Route path="/other" element={<OtherInterests />} />
          </Routes>
        </Router>

        <footer id="footer">Ben de Lusignan | 2023</footer>
      </div>
    </body>
  );
};

export default App;
