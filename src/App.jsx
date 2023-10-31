import React from "react";
import { useDispatch, useSelector } from "react-redux";
const App = () => {
  // explain what bit of the store you want and what it returns (i want the state and want it to return state.count)
  const count = useSelector((state) => state.count);

  const dispatch = useDispatch(); // this dispatches a message to the store

  // these functions dont manipulate the data, these functions call the store and tells the store to manipulate the data
  const add = () => {
    dispatch({ type: "ADD" });
  };
  const minus = () => {
    dispatch({ type: "MINUS" });
  };

  // the interface
  return (
    <>
      <button onClick={add}>+</button>
      {count}
      <button onClick={minus}>-</button>
    </>
  );
};

export default App;
