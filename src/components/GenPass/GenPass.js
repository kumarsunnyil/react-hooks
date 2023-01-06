import React, { useState } from "react";
import { Col, RangeSlider } from "react-bootstrap";
import Form from "react-bootstrap/Form";

const GenPass = () => {
  const [pass, setPass] = useState("");
  const upperCaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz";
  const numberStrings = "0123456789";

  const [letters, setLetters] = useState(lowerCaseLetters);
  const [sliderValue, setSliderValue] = React.useState(15);
  
  const genPassword = () => {
    
    let result = "";
    for (var i = 0; i < sliderValue; i++) {
      result += letters.charAt(Math.floor(Math.random() * letters.length));
    }
    setPass(result);
  };
  return (
    <div>
      <h1>Generate Strong Password</h1>
      <p>
        <span>{pass}</span>
      </p>

      <Form>
        <Form.Group>
          <Form.Label>Password Length</Form.Label>
          <Form.Range onChange={(e) => setSliderValue(e.target.value)} />
          <p> Slider value {sliderValue} </p>
        </Form.Group>
        <Form.Check
          disabled
          type="switch"
          label="include lower case - default"
          id="disabled-custom-switch"
          checked
        />
        <Form.Check
          type="switch"
          id="custom-switch"
          label="include upper case"
          onChange={(e) => {
            if (e.target.checked === true)
              setLetters(letters + upperCaseLetters);
            else setLetters(letters.replace(upperCaseLetters, ''));
          }}
        />
        <Form.Check
          type="switch"
          id="number-switch"
          label="include numbers"
          onChange={(e) => {
            if (e.target.checked === true)
              setLetters(letters+numberStrings);
              else setLetters(letters.replace(numberStrings, ''));
          }}
        />
      </Form>

      <button onClick={genPassword}>Generate Password</button>
    </div>
  );
};

export default GenPass;
