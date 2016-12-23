import React, {Component, PropTypes} from "react";
export default class SliderImgs extends Component {
  constructor(props){
    super(props);
    this.state={
       curIndex:0,
     }
     this.static={
       count:0,
       clearTimeout:"",
       touchPos:{
         pageX:0,
         pageY:0,
         moveX:0,
       }
     }
  }
  componentDidMount(){
    // require('./App.scss');
    const {initClass} = this.props;
    const targetDom = document.querySelectorAll("."+initClass)[0];
    this.static.count = targetDom.firstChild.children.length;
    targetDom.firstChild.style.width = this.static.count+"00%";
    this.slideStartEvent = this._slideStartEvent.bind(this,targetDom);
    this.slideMoveEvent = this._slideMoveEvent.bind(this,targetDom);
    this.slideEndEvent = this._slideEndEvent.bind(this,targetDom);
    targetDom.addEventListener("touchstart",this.slideStartEvent,true);
    targetDom.addEventListener("touchmove",this.slideMoveEvent,true);
    targetDom.addEventListener("touchend",this.slideEndEvent,true);
  }

  _slideStartEvent(target,e){
    e.stopPropagation();
    target.firstChild.style.webkitTransitionDuration =
    target.firstChild.style.MozTransitionDuration =
    target.firstChild.style.msTransitionDuration =
    target.firstChild.style.OTransitionDuration =
    target.firstChild.style.transitionDuration = '';
    this.static.touchPos.pageX = e.touches[0].pageX;
    this.static.touchPos.pageY = e.touches[0].pageY;
  }

  getTranslate(){

  }

  //事件
  _slideMoveEvent(target,e){
    e.stopPropagation();
    const width = target.offsetWidth;
    const x = e.touches[0].pageX - this.static.touchPos.pageX + this.state.curIndex * width * -1;
    this.static.touchPos.moveX = x;
    target.firstChild.style.webkitTransitionDuration =
    target.firstChild.style.MozTransitionDuration =
    target.firstChild.style.msTransitionDuration =
    target.firstChild.style.OTransitionDuration =
    target.firstChild.style.transitionDuration = '0ms';

    target.firstChild.style.width = this.static.count+"00%";
    target.firstChild.style.webkitTransform =
    target.firstChild.style.msTransform =
    target.firstChild.style.MozTransform =
    target.firstChild.style.OTransform =
    target.firstChild.style.transform = "translate3d("+x+"px, 0px, 0px)";
  }
  //事件
  _slideEndEvent(target,e){
    e.stopPropagation();
    const width = target.offsetWidth;
    const moveEndY = this.static.touchPos.moveX;
    const curCount = this.posLeft(width,moveEndY);
    target.scrollLeft = 0;
    this.static.touchPos.pageX=0;
    this.static.touchPos.pageY=0;
    this.setState({
      curIndex:Math.abs(curCount),
    });
    setTimeout(()=>{
      target.firstChild.style.webkitTransitionDuration =
      target.firstChild.style.MozTransitionDuration =
      target.firstChild.style.msTransitionDuration =
      target.firstChild.style.OTransitionDuration =
      target.firstChild.style.transitionDuration = '300ms';

      target.firstChild.style.width = this.static.count+"00%";
      target.firstChild.style.webkitTransform =
      target.firstChild.style.msTransform =
      target.firstChild.style.MozTransform =
      target.firstChild.style.OTransform =
      target.firstChild.style.transform = "translate3d("+(curCount*width)+"px, 0px, 0px)";
    },0);
  }
  posLeft(width,left){
    let curCount = Math.floor(left / width + 0.5);
    if(curCount > 0 ){
      curCount = 0;
    }else if(curCount + this.static.count < 1){
      curCount = 1 - this.static.count;
    }
    return curCount;
  }

  removeEvent(){
    const {initClass} = this.props;
    document.querySelectorAll("."+initClass)[0].removeEventListener("touchstart",this.slideStartEvent,true);
    document.querySelectorAll("."+initClass)[0].removeEventListener("touchmove",this.slideMoveEvent,true);
    document.querySelectorAll("."+initClass)[0].removeEventListener("touchend",this.slideEndEvent,true);
  }

  componentWillUnmount(){
    this.removeEvent();
  }


  render(){
    const {imgs,initClass} = this.props;
    return (
      <div className={`slider-container ${initClass}`}>
        <div className="slider">
          {
            imgs.map((item,index)=>{
              return (
                <div key={index}>
                  <img src={item}/>
                </div>
              )
            })
          }
        </div>
        <div className="slider-pagination">
          {
            imgs.map((item,index)=>{
              return (
                <span key={index} className={this.state.curIndex==index?"active":""}></span>
              )
            })
          }
        </div>
      </div>
    )
  }
}

SliderImgs.defaultProps = {
  initClass:"img-slider",
  imgs:[],
};

SliderImgs.propTypes = {
  initClass:PropTypes.string,
  imgs:PropTypes.array,
};
