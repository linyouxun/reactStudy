import React ,{Component} from 'react';
import {Link} from "react-router";
import NavLink from "./NavLink";
import LazyImg from "./components/LazyImg";
import SliderImgs from "./components/SliderImgs";

export default class App extends Component{
  constructor (props) {
   super(props);
   this.goAbort = this._goAbort.bind(this);
 }

  componentDidMount(){
    require('./App.scss');
  }


  _goAbort(){
    this.context.router.push("/abort");
  }
  render(){
    const imgs = [
      "http://gqianniu.alicdn.com/bao/uploaded/i4//tfscom/i1/TB1n3rZHFXXXXX9XFXXXXXXXXXX_!!0-item_pic.jpg_320x320q60.jpg",
      "http://gqianniu.alicdn.com/bao/uploaded/i4//tfscom/i1/TB1n3rZHFXXXXX9XFXXXXXXXXXX_!!0-item_pic.jpg_320x320q60.jpg",
      "http://gqianniu.alicdn.com/bao/uploaded/i4//tfscom/i1/TB1n3rZHFXXXXX9XFXXXXXXXXXX_!!0-item_pic.jpg_320x320q60.jpg",
      // 'http://www.gaopinimages.com/imagesetsview/83/133200491347.jpg',
      // 'http://www.gaopinimages.com/imagesetsview/83/133100143197.jpg',
      // 'http://www.gaopinimages.com/imagesetsview/83/133200440961.jpg',
    ]
    const imgs2=[
    ]
    return (
      <div>
        <SliderImgs imgs={imgs} initClass='sss1'/>
        <SliderImgs imgs={imgs} initClass='sss2'/>
        <Link to="/abort2" activeStyle={{color:"gray"}}> Abort2</Link>
        {/* <button onClick={this.goAbort}>hello</button>
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
        </ul> */}
        {/* nihao */}
        {this.props.children}
        {/* nihao */}
        {/* {
          imgs2.map((item,index)=>{
            return (<LazyImg key={index} defaultClass="lazy-img" originImg={item}/>)
          })
        } */}
      </div>
    )
  }
}

App.contextTypes = {
  router: React.PropTypes.object
};
