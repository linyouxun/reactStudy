import React,{Component} from "react";
export default class Alert extends Component{
  construct(){
    console.log('----- Alert construct ------');
  }
  componentDidMount(){
  }
  render(){
    return(
      <div {...this.props}>
        <div className="div1">Ale3rt</div>
        {this.props.children}
      </div>
    )
  }
}
