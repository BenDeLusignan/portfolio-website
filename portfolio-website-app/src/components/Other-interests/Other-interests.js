import React, {useEffect} from "react";
import "./Other-interests.style.css"

const OtherInterests = () => {
    useEffect(() => {
        document.title = "Portfolio | Ben de Lusignan";
      }, []);

      return (
        <div id="content">
      <h2>Other Interests</h2>
      <p>This is the Other Interests page content.</p>
    </div>
      )
}

export default OtherInterests