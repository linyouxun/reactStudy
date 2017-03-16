import React ,{Component} from "react";


export default class Repo extends Component{
  constructor (props) {
    super(props);
    this.goBack = this._goBack.bind(this);
  }
  _goBack(){
    this.context.router.push("/");
  }
  render(){
    const {id} = this.props.params;
    return (
      <div>
        repo:{id}
        <button onClick={this.goBack}>go back</button>
      </div>
    )
  }
}

Repo.contextTypes={
  router: React.PropTypes.object
}
