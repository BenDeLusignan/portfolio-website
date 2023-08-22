import React, {useEffect} from "react"
import "./Java.style.css"

const Java = () => {
    useEffect(() => {
        document.title = "Portfolio | Ben de Lusignan";
      }, []);

      return (
        <div id="content">
      <h2>Java Page</h2>
      <p>This is the Java page content.</p>
    </div>
      )
}

export default Java;