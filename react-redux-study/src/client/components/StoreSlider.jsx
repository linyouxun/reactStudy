import React,{Component} from "react";

export default class StoreSlider extends Component{
  constructor(props){
    super(props);
  }
  componentDidMount(){
    require("./storeslider.scss");
  }
  render(){
    const imgs = [
      "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3303203581,2881658159&fm=116&gp=0.jpg",
      "https://ss0.baidu.com/73F1bjeh1BF3odCf/it/u=928741854,2643928631&fm=85&s=47609A43F5F99A2FB51814B30300C090",
      "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1406986321,400761898&fm=116&gp=0.jpg",
      "https://ss0.baidu.com/73F1bjeh1BF3odCf/it/u=2580413592,2120112994&fm=85&s=F63D3EC654FDCF8CFDF3E5710300D07B",
      "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3303203581,2881658159&fm=116&gp=0.jpg",
    ]
    const slideDiv = {
      // width:imgs.length / 3 * 100 + "%",
    }
    const slideItem = {
      width:100/3+"%",
    }
    return (
      <div className="store-slider">
        <div className="store-slide-div" style={slideDiv}>
          {
            imgs.map((item,index)=>{
              return(
                <div key={index} className="store-slide-item">
                  <div className="item-top">
                    <img src={item}/>
                  </div>
                  <div className="item-center"></div>
                  <div className="item-bottom">
                    nihao
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
    )
  }
}
