import React, { useEffect } from "react";

const Python = () => {
  useEffect(() => {
    document.title = "Python | Ben de Lusignan"; // Set your desired title here
  }, []);
  
  return (
    <div>
      <h2>Python Page</h2>
      <p>This is the Python page content.</p>
    </div>
  );
};

export default Python;
