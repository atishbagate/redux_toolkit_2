import "./styles.css";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  decrement,
  increment,
  incrementByAmount,
  decrementByAmount
} from "./redux/conter";

import { add, sub, divide, multi } from "./redux/calculate";
export default function App() {
  const { count } = useSelector((state) => state.counter);
  const { value } = useSelector((state) => state.calculate);
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
      <br />
      <h1>{value}</h1>
      <button onClick={() => dispatch(add(10))}>add by 10</button>
      <button onClick={() => dispatch(sub(10))}>sub by 10</button>
      <button onClick={() => dispatch(multi(10))}>multiply by 10</button>
      <button onClick={() => dispatch(divide(10))}>divide by 10</button>
    </div>
  );
}
