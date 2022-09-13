import { useSelector, useDispatch } from "react-redux"
import { decrement, increment, reset, incrementBy, decrementBy } from "./store";
import { useState } from "react";
import Decrement from "./Decrement.jsx";



export default function Counter() {
  const [incrementValue, setIncrementValue] = useState("")
  const [decrementValue, setDecrementValue] = useState("")

  const counter = useSelector(state => state.value)
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(incrementBy(incrementValue))
    setIncrementValue("")
  }
  const handleDecClick = () => {
    dispatch(decrementBy(decrementValue))
    setDecrementValue("")
  }

  console.log(decrementValue);

  return (
    <div className="counter-wrapper">
      <h1>Counter {counter}</h1>
      <button onClick={() => dispatch(increment())}>Add 1</button>
      <button onClick={() => dispatch(decrement())}>Substract 1</button>
      <button onClick={() => dispatch(reset())}>Reset</button>
      <div className="increment-input">
        <input type="text" value={incrementValue} onChange={(e) => setIncrementValue(e.target.value)} placeholder="Add own number" />
        <button onClick={handleClick} disabled={!incrementValue}>Add</button>
      </div>
      <Decrement state={setDecrementValue} onClick={handleDecClick} value={decrementValue} />
    </div>

  )

}


