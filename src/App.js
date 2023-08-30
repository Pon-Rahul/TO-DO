import React,{Component} from "react";
import TxtBox from "./TxtBox";
import Task from "./List";
import WorkPlace from "./WorkPlace";
class App extends Component {
  constructor(){
    super()
    this.state = {
        arr:[],
        status:"ALL",
        editelement:-1,
    }
}

updateArr = (valll) =>{
  const {arr,editelement} = this.state
  if(editelement === -1){
    const obj = {taskName:valll,finished:false}
    arr.push(obj);
    this.setState(arr)
  }
  else{
    arr[editelement].taskName = valll
    this.setState(arr)
    this.setState({editelement : -1})
  }
}

deleteArr = (value) =>{
  const {arr} = this.state
  arr.splice(value,1)
  this.setState(arr)
}

ticKed = (index) => {
  const{arr} =this.state
  if(arr[index].finished === false){
  arr[index].finished = true;
  }
  else{
    arr[index].finished = false;
  }
  this.setState(arr)
}

changeStatus = (status)=>{
    this.setState({status:status});
}

EditArr = (editelement) => {
  const{arr} = this.state
  this.setState({editelement : editelement})
  this.setState(arr)
}

  render() {
    return(
      <div>
      <div className="totalbox">
        <TxtBox editelement={this.state.editelement} arr={this.state.arr} additems = {this.updateArr} />
        <Task changeStatus={this.changeStatus} Edit = {this.EditArr}/>
        <WorkPlace status={this.state.status} arr={this.state.arr} Edit = {this.EditArr} deleteitems = {this.deleteArr} ticked = {this.ticKed}/>
      </div>
      </div>
    )
  }
}
export default App