import React ,{Component} from 'react';
import {Link} from "react-router";
import NavLink from "./NavLink";

export default class App extends Component{
  constructor (props) {
   super(props);
   this.goAbort = this._goAbort.bind(this);
 }

  componentDidMount(){
    require('./App.scss');
    // import from "./App.scss";
  }
  _goAbort(){
    this.context.router.push("/abort");
  }
  render(){
    return (
      <div>
        <button onClick={this.goAbort}>hello</button>
        <div className="div" data-title="NEW" activeStyle={{color:"red"}}>
          Hello World2
        </div>
        <ul>
          <li>
            <Link to="/abort" activeStyle={{color:"gray"}}> Abort</Link>
          </li>
          <li>
            <Link to="/repo/2" activeStyle={{color:"gray"}}> repo</Link>
          </li>
          <li>
            <Link to="/abort2" activeStyle={{color:"gray"}}> Abort2</Link>
          </li>
        </ul>
        <ul>
          <li>
            <NavLink to="/abort" activeStyle={{color:"red"}}> <div>ddddd</div>Abort</NavLink>
          </li>
          <li>
            <NavLink to="/repo/1" activeStyle={{color:"red"}}> repo</NavLink>
          </li>
          <li>
            <NavLink to="/abort2" activeStyle={{color:"red"}}> Abort2</NavLink>
          </li>
        </ul>
        {/* nihao */}
        {this.props.children}
        {/* nihao */}
      </div>
    )
  }
}

App.contextTypes = {
  router: React.PropTypes.object
};
