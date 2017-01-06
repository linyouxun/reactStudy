import React,{Component} from "react";

export default class ScrollTop extends Component{
  constructor(props){
    super(props);
  }
  componentDidMount(){
    require("./scrolltop.scss");
    this.refs.scroll.addEventListener("scroll",()=>{
      
    })
  }
  render(){
    return(
      <div className="scroll-top" ref="scroll">
        {this.props.children}
      </div>
    )
  }
}
