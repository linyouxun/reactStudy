import TestUtils from 'react-addons-test-utils';
import Counter from "../src/container/Counter";
console.log('---');

function shallowRender(Component) {
  const renderer = TestUtils.createRenderer();
  renderer.render(<Component/>);
  return renderer.getRenderOutput();
}


describe("Counter server rendering",()=>{
  it("Counter context",()=>{
    // const Counter = shallowRender(Counter);
    // console.log(Counter);
    console.log('---');
  })
})
