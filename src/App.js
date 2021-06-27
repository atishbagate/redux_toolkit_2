import "./styles.css";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  decrement,
  increment,
  incrementByAmount,
  decrementByAmount
} from "./redux/conter";

export default function App() {
  const { count } = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h1>{count}</h1>
      <button onClick={() => dispatch(increment())}>increase</button>
      <button onClick={() => dispatch(decrement())}>decrease</button>
      <button onClick={() => dispatch(incrementByAmount(10))}>
        increment by 10
      </button>
      <button onClick={() => dispatch(decrementByAmount(10))}>
        decrement by 10
      </button>
    </div>
  );
}
