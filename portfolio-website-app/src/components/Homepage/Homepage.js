import React, { useEffect } from "react";
import './Homepage.style.css'

const Homepage = () => {
  useEffect(() => {
    document.title = "Portfolio | Ben de Lusignan"; // Set your desired title here
  }, []);

  return (
    <div id="content">
      <h2>Home Page</h2>
      <p>This is home.</p>
    </div>
  );
};

export default Homepage;
