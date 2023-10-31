//reducer function - it gets the data, gets an action, implements the action, and then gives you back the mutated data
const initialState = { count: 0 };

// state - what the state was originally, action is whats inside the dispatch function ({ADD})
export function reducer(state = initialState, action) {
  switch (action.type) {
    case "ADD": {
      // when ADD is used make a copy and then add 1 to the copy and then return the copy
      const copy = { ...state };
      copy.count = copy.count + 1;
      return copy;
    }
    case "MINUS": {
      // when MINUS is used make a copy and then minus 1 to the copy and then return the copy
      const copy = { ...state };
      copy.count = copy.count - 1;
      return copy;
    }
    default:
      break;
  }
}
