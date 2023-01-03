import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { getOverlayDirection } from "react-bootstrap/esm/helpers";
import './BGColor.css'

const BGColor = () => {

    const [active, setActive] = useState(false);
    const handleClick = () => {
        console.log("Button Clicked")
        setActive(!active);
        console.log("Active " + active)
    }; 

  return (
    <div className="parent-container">
      <h1>Change the background color on button click</h1>
      <div className={active ? "black-btn" : "white-btn"}> 
      
       Hello this is a test
      </div>
      <button
      onClick={handleClick}
      
      >
      Hello 
      SignUp
      </button>
    </div>
  );
};

export default BGColor;
