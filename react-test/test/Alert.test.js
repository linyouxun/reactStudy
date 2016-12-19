import React from 'react';
import TestUtils from 'react-addons-test-utils';
import { expect } from 'chai';
import Alert from '../src/Alert';

function shallowRender(Component) {
  const renderer = TestUtils.createRenderer();
  renderer.render(<Component/>);
  return renderer.getRenderOutput();
}

describe('Shallow Rendering', function () {
  it('Alert', function () {
    const app = shallowRender(Alert);
    console.log(app);
    console.log(app.props.children);
    // component's shallow rendering has props.children
    expect(app.props.children[0].type).to.equal('div');
    // expect(app.props.children[0].props.children).to.equal('Todos');
  });
});

describe('DOM Rendering', function () {
  it('Alert DOM', function () {
    const app = TestUtils.renderIntoDocument(<Alert/>);
    console.log(app);
    // let todoItems = TestUtils.scryRenderedDOMComponentsWithTag(app, 'li');
    // let todoLength = todoItems.length;
    // let deleteButton = todoItems[0].querySelector('button');
    // TestUtils.Simulate.click(deleteButton);
    // let todoItemsAfterClick = TestUtils.scryRenderedDOMComponentsWithTag(app, 'li');
    // expect(todoItemsAfterClick.length).to.equal(todoLength - 1);
  });
});
