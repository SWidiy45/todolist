import React from "react";
import checked from "./checked.png";
import check from "./check.png";
import { Component } from "react/cjs/react.production.min";

// import { Component } from "react/cjs/react.production.min";

class Toggle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggleStatus: true,
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState((state) => ({
      toggleStatus: !state.toggleStatus,
    }));
  }

  render() {
    return (
      <button className="checkbox" onClick={this.handleClick}>
        {this.state.toggleStatus ? <img src={check} /> : <img src={checked} />} <br />
      </button>
    );
  }
}

function List(props) {
  return (
    <div>
      {props.item.map((item, index) => (
        <div key={index} className="todo-row">
          {item}
          <Toggle />
          {/* <input type="checkbox"> {item}</input> */}
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
