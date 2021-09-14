import React from "react";

import "./Button.css";

const Button = ({ content, type }) => {
  return (
    <div className={`Button ${content === "0" ? "zero" : ""}${type || ""}`}>
      {content}
    </div>
  );
};

export default Button;
