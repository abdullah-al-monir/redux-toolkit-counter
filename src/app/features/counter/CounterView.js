import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increaseByAmount, increment, reset } from "./counterSlice";
function CounterView() {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();
  return (
    <div>
      <h2>Count: {count}</h2>
      <button
        onClick={() => {
          dispatch(increment());
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          dispatch(decrement());
        }}
      >
        Decrement
      </button>
      <button
        onClick={() => {
          dispatch(reset());
        }}
      >
        Reset
      </button>
      <button
        onClick={() => {
          dispatch(increaseByAmount(3));
        }}
      >
        Increase By 3
      </button>
    </div>
  );
}

export default CounterView;
