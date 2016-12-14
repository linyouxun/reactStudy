import React ,{Component} from 'react';
import {Link} from "react-router";
import NavLink from "./NavLink";
import LazyImg from "./components/LazyImg";

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
    const imgs2=[
      "http://www.gaopinimages.com/webres/upload/20161128/1480324741734.jpg",
      "http://image4.app.gaopinimages.com/THUMBNAIL/240/a8/d0/42/2b/133204498442.jpg",
      "http://image1.app.gaopinimages.com/THUMBNAIL/240/74/b4/4e/21/133204498470.jpg",
      "http://image2.app.gaopinimages.com/THUMBNAIL/240/08/38/21/91/133204498522.jpg",
      "http://image3.app.gaopinimages.com/THUMBNAIL/240/14/c1/fe/4e/133204498755.jpg",
      "http://image4.app.gaopinimages.com/THUMBNAIL/240/d1/9a/89/3e/133204499736.jpg",
      "http://image1.app.gaopinimages.com/THUMBNAIL/240/ee/f2/a5/3e/133204500661.jpg",
      "http://image2.app.gaopinimages.com/THUMBNAIL/240/c0/cd/83/ee/133204500712.jpg",
      "http://image3.app.gaopinimages.com/THUMBNAIL/240/66/3c/de/d4/133204500714.jpg",
      "http://image4.app.gaopinimages.com/THUMBNAIL/240/9d/bf/8e/ed/133204500747.jpg",
      "http://image1.app.gaopinimages.com/THUMBNAIL/240/aa/9b/80/d4/133204501366.jpg",
      "http://www.gaopinimages.com/webres/upload/20161128/1480321496265.jpg",
      "http://image2.app.gaopinimages.com/THUMBNAIL/240/c6/79/e2/b7/133205296207.jpg",
      "http://image3.app.gaopinimages.com/THUMBNAIL/240/00/8a/52/71/133205296230.jpg",
      "http://image4.app.gaopinimages.com/THUMBNAIL/240/84/45/43/e0/133205296850.jpg",
      "http://image1.app.gaopinimages.com/THUMBNAIL/240/4a/ff/ae/54/133205296870.jpg",
    ]
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
        {
          imgs2.map((item,index)=>{
            return (<LazyImg key={index} defaultClass="lazy-img" originImg={item}/>)
          })
        }
      </div>
    )
  }
}

App.contextTypes = {
  router: React.PropTypes.object
};
