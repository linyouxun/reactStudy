import React from 'react';
import { render } from 'react-dom';
import Counter from "./src/containers/Counter";
import {Provider} from "react-redux";
import store from "./src/store/store";

render(
  <Provider store={store}>
    <Counter/>
  </Provider>,
  document.getElementById('app')
)
