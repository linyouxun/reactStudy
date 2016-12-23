import React,{Component,PropTypes} from "react";
import {connect} from "react-redux";
import {clickAddAction} from "../store/actions/Counter";

class Counter extends Component{
  constructor(props){
    super(props);
  }
  render(){
    const {counter,onClickAdd} = this.props;
    return(
      <div>
        <span>{counter}</span>
        <div className="div1" onClick={onClickAdd}>add</div>
      </div>
    )
  }
}

Counter.propTypes = {
  counter:PropTypes.number.isRequired,
  onClickAdd:PropTypes.func.isRequired,
}


function mapStateToProps(state){
  return {
    counter:state.counterAdd.counter
  }
}

function mapDispatchToProps(dispatch){
  return{
    onClickAdd:()=>dispatch(clickAddAction())
  }
}

export {Counter};
export default connect(mapStateToProps,mapDispatchToProps)(Counter)
