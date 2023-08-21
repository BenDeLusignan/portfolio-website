import React, { useEffect } from "react";

const Homepage = () => {
  useEffect(() => {
    document.title = "Portfolio | Ben de Lusignan"; // Set your desired title here
  }, []);

  return (
    <div>
      <h2>Home Page</h2>
      <p>This is home.</p>
    </div>
  );
};

export default Homepage;
