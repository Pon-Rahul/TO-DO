import React, { Component } from "react";
import "./todo.css";

class Task extends Component {

  render() {
    return (
      <span className="newline">
        <button className="list" onClick={() => {this.props.changeStatus('ALL')}}>TASKS</button>
        <button className="list"onClick={() =>{this.props.changeStatus("COMPLETED")}}>COMPLETED</button>
        <button className="list"onClick={() => {this.props.changeStatus("TODO")}}>TODO</button>
      </span>
    );
  }
}

export default Task;