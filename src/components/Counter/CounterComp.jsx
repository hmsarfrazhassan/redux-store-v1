import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement, reset } from "../../actions/counterActions";

const CounterComp = () => {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();
  return (
    <div className="py-10 flex flex-col gap-6 items-center">
      <div className="text-4xl text-center font-semibold capitalize">
        Counter with redux
      </div>

      <div>
        Counter: <span className="font-semibold">{count}</span>
      </div>
      <div className="flex justify-center items-center gap-10">
        <button
          onClick={() => dispatch(increment())}
          className="h-10 px-10 flex justify-center items-center cursor-pointer rounded-sm bg-amber-100 ring-2 active:text-white hover:bg-amber-100/70 active:bg-amber-600"
        >
          Increment
        </button>
        <button
          onClick={() => dispatch(decrement())}
          className="h-10 px-10 flex justify-center items-center cursor-pointer rounded-sm bg-amber-100 ring-2 active:text-white hover:bg-amber-100/70 active:bg-amber-600"
        >
          Decrement
        </button>
        <button
          onClick={() => dispatch(reset())}
          className="h-10 px-10 flex justify-center items-center cursor-pointer rounded-sm bg-amber-100 ring-2 active:text-white hover:bg-amber-100/70 active:bg-amber-600"
        >
          Clear
        </button>
      </div>
    </div>
  );
};

export default CounterComp;
