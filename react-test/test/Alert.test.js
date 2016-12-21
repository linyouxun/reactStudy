import React from 'react';
import TestUtils from 'react-addons-test-utils';
// import { expect } from 'chai';
// import {describeWithDOM,mount,shallow,spyLifecycle} from "enzyme";
import Alert from '../src/Alert';
import {shallowRender} from "./tools/public.js";

import {
  describeWithDOM,
  mount,
  shallow,
  spyLifecycle
} from 'enzyme';

console.log(describeWithDOM);
console.log(spyLifecycle);
console.log(mount);
// describe('Shallow Rendering',()=>{
//   describeWithDOM("render DON lifecycle",()=>{
//     it('Alert', function () {
//       // spyLifecyle(Alert);
//       const app = mount(<Alert/>);
//       console.log(Alert.prototype.componentDidMount.calledOnce);
//     });
//   })
//   // it("Alert find div2",()=>{
//   //   const props = { onMount: sinon.spy() };
//   //
//   //   // mount our component
//   //   mount(<Alert {...props} />);
//   //   expect(props.onMount.calledOnce).to.be.true;
//   //   // const app = shallow(<Alert/>);
//   //   // expect(app.find(".div1")).to.have.length(1);
//   // })
// });
// function shallowRender(Component) {
//   const renderer = TestUtils.createRenderer();
//   renderer.render(<Component/>);
//   return renderer.getRenderOutput();
// }

// describe('Shallow Rendering', function () {
//   it('Alert', function () {
//     const app = shallowRender(Alert);
//     expect(app.props.children[0].type).to.equal('div');
//     // expect(app.props.children[0].props.children).to.equal('Todos');
//   });
// });

// describe('DOM Rendering', function () {
//   it('Alert DOM', function () {
//     const app = TestUtils.renderIntoDocument(<Alert/>);
//     let todoItems = TestUtils.scryRenderedDOMComponentsWithTag(app, 'div');
//     // console.log(todoItems);
//     // let todoLength = todoItems.length;
//     // let deleteButton = todoItems[0].querySelector('button');
//     // TestUtils.Simulate.click(deleteButton);
//     // let todoItemsAfterClick = TestUtils.scryRenderedDOMComponentsWithTag(app, 'li');
//     // expect(todoItemsAfterClick.length).to.equal(todoLength - 1);
//   });
// });
