import React,{Component} from "react";
export default class Alert extends Component{
  construct(){
    console.log('----- Alert construct ------');
  }
  render(){
    return(
      <div {...this.props}>
        <div>Alert</div>
        {this.props.children}
      </div>
    )
  }
}
