import React, { useEffect } from "react";

const Python = () => {
  useEffect(() => {
    document.title = "Python | Ben de Lusignan";
  }, []);
  
  return (
    <div id="content">
      <h2>Python Page</h2>
      <p>This is the Python page content.</p>
    </div>
  );
};

export default Python;
