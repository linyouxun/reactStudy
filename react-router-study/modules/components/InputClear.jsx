/**
 * input 添加一健清空按钮
 */

import React, {Component, PropTypes} from "react";
import {Input} from "antd";
export default class InputClear extends Component {
  constructor(props){
    super(props);
    this.clearValue = this._clearValue.bind(this);
  }
  componentDidMount() {
    require('./InputClear.scss');
  }
  componentWillUnmount(){
  }
  _clearValue(){
    this.refs.input.refs.input.value='';
    // this.refs.input.value='';
  }
  render(){
    return (
      <span>
        <Input className="input-clear" ref='input' {...this.props} required/>
        {/* <input className="input-clear" ref='input' {...this.props} required/> */}
        <i className="anticon anticon-cross-circle clear" onClick={this.clearValue}></i>
      </span>
    )
  }
}
InputClear.defaultProps = {
};
InputClear.propTypes = {
};
