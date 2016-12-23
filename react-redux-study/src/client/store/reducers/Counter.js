import {CLICK_ADD} from "../actions/Counter";

export function counterAdd(state={counter:0},action){
  const {counter} = state;
  switch (action.type) {
    case CLICK_ADD:{
      return {counter:counter+1};
      break;
    }
    default:{
      return state;
    }
  }
}
