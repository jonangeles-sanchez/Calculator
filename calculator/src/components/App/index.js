import React from "react";

import Button from "../Button";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <div className="top">7:77</div>
      <div className="display">0</div>
      <div className="buttons">
        <Button content="AC" />
      </div>
      <div className="bottom">-</div>
    </div>
  );
};

export default App;
