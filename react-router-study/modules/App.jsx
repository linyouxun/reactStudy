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
  componentWillMount(){
    console.log('--componentWillMount--');
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
    ]
    const imgs2=[
      "http://img02.tooopen.com/images/20141229/sl_107003776898.jpg",
      "http://img06.tooopen.com/images/20161214/tooopen_sl_190570122189.jpg",
      "http://img06.tooopen.com/images/20161204/tooopen_sl_188713338136.jpg",
      "http://img06.tooopen.com/images/20161120/tooopen_sl_187242346264.jpg",
      "http://img06.tooopen.com/images/20161022/tooopen_sl_182719436413.jpg",
      "http://img06.tooopen.com/images/20160921/tooopen_sl_179583448992.jpg",
      "http://img06.tooopen.com/images/20160830/tooopen_sl_177195524686.jpg",
      "http://img06.tooopen.com/images/20160725/tooopen_sl_171743228656.jpg",
      "http://img06.tooopen.com/images/20160722/tooopen_sl_171283344775.jpg",
      "http://img06.tooopen.com/images/20160718/tooopen_sl_170714426116.jpg",
    ]
    return (
      <div>
        <SliderImgs imgs={imgs2} initClass='sss1'/>
        {/* <SliderImgs imgs={imgs} initClass='sss2'/> */}
        {/* <Link to="/abort2"> Abort2</Link>
        <button onClick={this.goAbort}>hello</button>
        <div className="div" data-title="NEW">
          Hello World2
        </div>
        <ul>
          <li>
            <Link to="/abort" > Abort</Link>
          </li>
          <li>
            <Link to="/repo/2"> repo</Link>
          </li>
          <li>
            <Link to="/abort2" > Abort2</Link>
          </li>
        </ul>
        <ul>
          <li>
            <NavLink to="/abort" > <div>ddddd</div>Abort</NavLink>
          </li>
          <li>
            <NavLink to="/repo/1"> repo</NavLink>
          </li>
          <li>
            <NavLink to="/abort2" > Abort2</NavLink>
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

// module.exports = App;
