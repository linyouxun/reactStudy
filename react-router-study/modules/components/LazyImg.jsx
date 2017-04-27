import React, {Component, PropTypes} from "react";
export default class LazyImg extends Component {
  constructor(props){
    super(props);
    this.static={
      monitorEvent:["scroll","resize","touchmove"],
    }
  }
  componentDidMount() {
    const el = this.refs.lazyImg;
    this.removeEvent = this._removeEvent.bind(this);
    this.updateViewport = this._updateViewport.bind(this,el);
    for (let i = 0,len = this.static.monitorEvent.length; i < len; i++) {
      window.addEventListener(this.static.monitorEvent[i],this.updateViewport,true);
    }
    setTimeout(()=>{
      this.updateViewport(el);
    },0)
  }

  _updateViewport(el){
    if(this.isVisiable(el)){
      this.loadImg(el);
    }else{
    }
  }

  loadImg(el){
    const {originImg} = this.props;
    const img = new Image();
    img.src = originImg;
    img.addEventListener('load', () => {
      el.src = img.src;
      this.removeEvent();
    }, true);
    img.addEventListener('error', () => {
      console.log('load failed');
    }, true);

  };


  isVisiable(el){
    const bcr = el.getBoundingClientRect(); //取得元素在可视区的位置
    const {left,top,right,bottom} = this.props;
    const mw = el.offsetWidth; //元素自身宽度
    const mh = el.offsetHeight; //元素自身的高度
    const w = window.innerWidth; //视窗的宽度
    const h = window.innerHeight; //视窗的高度
    const boolX = (!((bcr.right - left) <= 0 && ((bcr.left + mw) - left) <= 0) && !((bcr.left + right) >= w && (bcr.right + right) >= (mw + w))); //上下符合条件
    const boolY = (!((bcr.bottom - top) <= 0 && ((bcr.top + mh) - top) <= 0) && !((bcr.top + bottom) >= h && (bcr.bottom + bottom) >= (mh + h))); //上下符合条件
    if (el.width != 0 && el.height != 0 && boolX && boolY) {
      return true;
    } else {
      return false;
    }
  }

  _removeEvent(){
    for (let i = 0,len = this.static.monitorEvent.length; i < len; i++) {
        window.removeEventListener(this.static.monitorEvent[i],this.updateViewport,true);
    }
  }

  componentWillUnmount(){
    for (let i = 0,len = this.static.monitorEvent.length; i < len; i++) {
        window.removeEventListener(this.static.monitorEvent[i],this.updateViewport,true);
    }
  }

  render(){
    const {defaultClass,defaultImg} = this.props;
    return (
      <img ref="lazyImg" className={defaultClass} src={defaultImg}/>
    )
  }
}

LazyImg.defaultProps = {
  top:0, //元素在顶部伸出的距离才加载
  right:0, //元素在右边伸出的距离才加载
  bottom:0, //元素在底部伸出的距离才加载
  left:0, //元素在左边伸出的距离才加载
  defaultClass:"",
  // defaultImg:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAC0lEQVR42mNgAAIAAAUAAen63NgAAAAASUVORK5CYII=",
  defaultImg:"data:image/gif;base64,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",
  originImg:"",
};

LazyImg.propTypes = {
  defaultClass:PropTypes.string,
  defaultImg:PropTypes.string,
  originImg:PropTypes.string,
  top:PropTypes.number,
  right:PropTypes.number,
  bottom:PropTypes.number,
  left:PropTypes.number,
};
