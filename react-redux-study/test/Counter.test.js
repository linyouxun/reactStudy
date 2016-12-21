import React from "react";
import {findDOMNode} from "react-dom";
import TestUtils from 'react-addons-test-utils';
import Container,{Counter} from "../src/containers/Counter";
import { expect } from 'chai';
import {mount} from 'enzyme';

function shallowRender(Component,props) {
  const renderer = TestUtils.createRenderer();
  renderer.render(<Component {...props}/>);
  return renderer.getRenderOutput();
}


describe("Counter server rendering",()=>{
  const props = {
    counter:0,
    onClickAdd:()=>{
      console.log('-onClickAdd-');
    },
  }
  it("Counter default context",()=>{
    const app = shallowRender(Counter,props);
    expect(app.props.children[0].type).to.equal("span");
    expect(app.props.children[0].props.children).to.equal(0);
    expect(app.props.children[1].type).to.equal("div");
    expect(app.props.children[1].props.children).to.equal("add");
  })

  it("Counter DOM click",()=>{
    const app = TestUtils.renderIntoDocument(<Counter {...props}/>)
    const appDOM = findDOMNode(app);
    let spanDOM = TestUtils.scryRenderedDOMComponentsWithTag(app,"span");
    let buttonDOM = appDOM.querySelector("div");
    expect(spanDOM[0].innerHTML).to.be.equal("0");
    TestUtils.Simulate.click(buttonDOM);
  })

  it("enzyme : Counter DOM click",()=>{
    let app = mount(<Counter {...props}/>)
    expect(app.find("div").at(0).text()).to.equal("0add");
    expect(app.find("span").at(0).text()).to.equal("0");
    expect(app.find("div").at(1).text()).to.equal("add");
    app.find("div").at(1).simulate("click");
  })

})
