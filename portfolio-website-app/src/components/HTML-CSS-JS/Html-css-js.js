import React, {useEffect} from "react"
import './Html-css-js.style.css'

const HCJ = () => {

    useEffect(() => {
        document.title = "Portfolio | Ben de Lusignan";
      }, []);
    return(
        <div id="content">
      <h2>Web Development Page</h2>
      <p>This is Web Development page content.</p>
    </div>

    );
}

export default HCJ;