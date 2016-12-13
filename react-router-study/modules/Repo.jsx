import React ,{Component} from "react";


export default class Repo extends Component{
  render(){
    const {id} = this.props.params;
    return (
      <div>repo:{id}</div>
    )
  }
}
