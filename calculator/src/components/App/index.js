import React, { useState } from "react";

import Button from "../Button";
import "./App.css";

const App = () => {
  const [value, setValue] =
    useState("0"); /* This sets the constant value of 0 */

  const handleButtonPress = (content) => () => {
    const num = parseFloat(value);

    setValue(parseFloat(num + content).toString());
  };

  return (
    <div className="App">
      <div className="top">7:77</div>
      <div className="display">{value}</div>
      <div className="buttons">
        <Button
          onButtonClick={handleButtonPress}
          content="AC"
          type="function"
        />
        <Button onButtonClick={handleButtonPress} content="±" type="function" />
        <Button onButtonClick={handleButtonPress} content="%" type="function" />
        <Button onButtonClick={handleButtonPress} content="÷" type="operator" />
        <Button onButtonClick={handleButtonPress} content="7" />
        <Button onButtonClick={handleButtonPress} content="8" />
        <Button onButtonClick={handleButtonPress} content="9" />
        <Button onButtonClick={handleButtonPress} content="x" type="operator" />
        <Button onButtonClick={handleButtonPress} content="4" />
        <Button onButtonClick={handleButtonPress} content="5" />
        <Button onButtonClick={handleButtonPress} content="6" />
        <Button onButtonClick={handleButtonPress} content="-" type="operator" />
        <Button onButtonClick={handleButtonPress} content="1" />
        <Button onButtonClick={handleButtonPress} content="2" />
        <Button onButtonClick={handleButtonPress} content="3" />
        <Button onButtonClick={handleButtonPress} content="+" type="operator" />
        <Button onButtonClick={handleButtonPress} content="0" />
        <Button onButtonClick={handleButtonPress} content="." />
        <Button onButtonClick={handleButtonPress} content="=" />
      </div>
      <div className="bottom">-</div>
    </div>
  );
};

export default App;
