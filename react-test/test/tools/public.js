import React from 'react';
import TestUtils from 'react-addons-test-utils';


const shallowRender = (Component)=>{
  const renderer = TestUtils.createRenderer();
  renderer.render(<Component/>);
  return renderer.getRenderOutput();
}
module.exports = {
  shallowRender:shallowRender,
}
