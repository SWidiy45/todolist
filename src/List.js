import React from "react";
import logo_pdf from "./pdf-file.png";

// import { Component } from "react/cjs/react.production.min";

function List(props) {
  return (
    <div>
      {props.item.map((item, index) => (
        <div key={index} className="todo-row">
          {item}
        </div>
      ))}
      <button className="download-button">
        Download
        {/* <img src={logo_pdf} className="pdf-icon" /> */}
      </button>
    </div>
  );
}

export default List;
