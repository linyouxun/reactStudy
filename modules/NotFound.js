import React,{Component} from "react";
import {Link} from "react-router";

export default class NotFound extends Component{
  render(){
    return (
      <div>
        NotFound
        <hr/>
        <Link to="/">go back</Link>
      </div>
    )
  }
}
