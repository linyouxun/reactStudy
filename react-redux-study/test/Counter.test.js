import React from "react";
import TestUtils from 'react-addons-test-utils';
import Container,{Counter} from "../src/containers/Counter";
import { expect } from 'chai';

function shallowRender(Component) {
  const renderer = TestUtils.createRenderer();
  renderer.render(<Component/>);
  return renderer.getRenderOutput();
}


describe("Counter server rendering",()=>{
  it("Counter context",()=>{
    const app = shallowRender(Counter);
    console.log(app);
  })
})
