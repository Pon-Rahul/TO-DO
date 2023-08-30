import React, { Component } from "react";
import "./todo.css";

class WorkPlace extends Component {

  deleteList = (index) =>{
    const{deleteitems} = this.props
    deleteitems(index)
   }
  checkBox = (index) =>{
    const{ticked} = this.props
    ticked(index)
  }
  EditList = (index) =>{
    const{Edit} = this.props
    Edit(index)
  }
  
  render() {
    const {arr,status}=this.props;
    return (
      <div className="listbox">
      {arr.map((item,index) => 
      {
        if(status==='ALL' || (status==="COMPLETED" && item.finished===true) || (status==="TODO" && item.finished===false) ){
             return <div key={index} >
             <div className="todo">
               <span>{item.taskName}</span>
               <span className = "boxbtn">
                 <input type="checkbox" id="tick" className = "check" onChange={(e) => this.checkBox(index)} checked={item.finished}></input>
                 <button className="editbtn" onClick={() => {this.EditList(index)}}>Edit</button>
                 <button className="deletebtn" onClick={() => {this.deleteList(index)}}>Delete</button>
               </span>
             </div>
           </div>
        }
      }
      )} </div>
    )
  }
}

export default WorkPlace;