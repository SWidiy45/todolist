// import logo from "./logo.svg";
import "./App.css";
import React from "react";
import List from "./List";
// import PDF from "./PDF";
// import ExportPdf from "./ExportPdf";
// import { Component } from "react/cjs/react.production.min";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { todoItem: "", item: [] };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ todoItem: event.target.value });
    // console.log(this.state.todoItem);
  }

  handleSubmit(event) {
    // alert("A name was submitted: " + this.state.value);
    event.preventDefault();
    if (this.state.todoItem == "") {
      return;
    }
    // console.log(this.state.todoItem);
    this.setState({
      item: [...this.state.item, this.state.todoItem],
      todoItem: "",
    });
  }

  render() {
    return (
      <div className="todolist">
        <h1>To Do List</h1>
        <form>
          <label>
            <input type="text" value={this.state.todoItem} onChange={this.handleChange} className="todo-input" />
          </label>
          <button onClick={this.handleSubmit} className="todo-button">
            Add todo
          </button>
          {/* <input type="submit" value="Submit" /> */}
        </form>
        <List item={this.state.item} />
        {/* <PDF item={this.state.item} /> */}

        {/* <ExportPdf /> */}
      </div>
    );
  }
}

export default App;
