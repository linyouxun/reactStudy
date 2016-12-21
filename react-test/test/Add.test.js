import React from 'react';
import TestUtils from 'react-addons-test-utils';
import { expect } from 'chai';
import Add from '../src/Add';
import {shallowRender} from "./tools/public.js";
import {findDOMNode} from 'react-dom';


describe('Add Rendering', function () {
  it('Add', function () {
    const app = shallowRender(Add);
    // component's shallow rendering has props.children
    expect(app.props.children[0].type).to.equal('span');
    expect(app.props.children[0].props.children).to.equal(0);
    // expect(app.props.children[1].type).to.equal('div');

  });
});

describe('Add DOM Rendering', function () {
  it('Add DOM', function () {
    const app = TestUtils.renderIntoDocument(<Add/>);
    const appDOM = findDOMNode(app);
    expect(appDOM.querySelector("span").innerHTML).to.equal("0");
    TestUtils.Simulate.click(appDOM.querySelector("div"));
    expect(appDOM.querySelector("span").innerHTML).to.equal("1");
  });
});
