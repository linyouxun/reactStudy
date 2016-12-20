import React from 'react';
import TestUtils from 'react-addons-test-utils';
// import { expect } from 'chai';
import {describeWithDOM,mount,shallow,spyLifecyle} from "enzyme";
import Alert from '../src/Alert';

describe('Shallow Rendering',()=>{
  describeWithDOM("render DON lifecycle",()=>{
    it('Alert', function () {
      // spyLifecyle(Alert);
      const app = mount(<Alert/>);
      console.log(Alert.prototype.componentDidMount.calledOnce);
    });
  })
  // it("Alert find div2",()=>{
  //   const app = shallow(<Alert/>);
  //   expect(app.find(".div1")).to.have.length(1);
  // })
});
