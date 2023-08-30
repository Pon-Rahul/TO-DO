import React, { Component } from "react";
import "./todo.css";
class TxtBox extends Component {
  constructor() {
    super();
    this.state = {
      value: "",
    };
  }
  addTask = () => {
    if (this.state.value !== "") {
      const {additems} = this.props;
        additems(this.state.value);
      this.setState({ value: "" });
    }
  };

  handleKeyDown = (ev) => {
  if (ev.keyCode === 13) {
    this.addTask()
   }
}

  componentDidUpdate(prev) {
    const { arr, editelement } = this.props;

    if (prev.editelement !== editelement && editelement >= 0) {
      this.setState({ value: arr[editelement].taskName });
    }
  }


  render() {
    return (
      <div className="txt" onKeyDown={this.handleKeyDown}>
        <input
          className="box" id="myinput"
          value={this.state.value}
          onChange={(e) => this.setState({ value: e.target.value })}
        ></input>
        <button className="button" onClick={this.addTask}   id="mybutton">
          ADD
        </button>
      </div>
    );
  }
}
export default TxtBox;
