import React,{Component,PropTypes} from "react";
import {connect} from "react-redux";
import {clickAddAction} from "../store/actions/Counter";
import StoreSlider from "../components/StoreSlider";
import ScrollTop from "../components/ScrollTop";

class Counter extends Component{
  constructor(props){
    super(props);
  }
  componentDidMount(){
    require("./counter.scss");
  }
  render(){
    const {counter,onClickAdd} = this.props;
    return(
      <div style={{height:"100%"}}>
        <span>{counter}</span>
        <div className="div1" onClick={onClickAdd}>add</div>
        <StoreSlider></StoreSlider>
        <ScrollTop>
          <div className="top-title">
            <div className="one">1</div>
            <div className="one">2</div>
          </div>
          <div>
            content<br/>content<br/>content<br/>content<br/>content<br/>content<br/>content<br/>content<br/>content<br/>
            content<br/>content<br/>content<br/>content<br/>content<br/>content<br/>content<br/>content<br/>content<br/>
            content<br/>content<br/>content<br/>content<br/>content<br/>content<br/>content<br/>content<br/>content<br/>
            content<br/>content<br/>content<br/>content<br/>content<br/>content<br/>content<br/>content<br/>content<br/>
            content<br/>content<br/>content<br/>content<br/>content<br/>content<br/>content<br/>content<br/>content<br/>
          </div>
        </ScrollTop>
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
