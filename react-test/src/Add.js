import React ,{Component} from "react";
export default class Add extends Component{
  constructor(props){
    super(props);
    this.state={
      myId:0,
    }
  }
  plus(){
    const {myId} = this.state;
    this.setState({
      myId:myId+1,
    })
  }
  render(){
    return(
      <div>
        <span>{this.state.myId}</span>
        <div onClick={this.plus.bind(this)}>add</div>
      </div>
    )
  }
}
