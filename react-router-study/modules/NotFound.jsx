import React,{Component} from "react";
import {Link} from "react-router";

class NotFound extends Component{
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

module.exports = NotFound;
