import React, { useState } from "react";
import Message from "./assets/Components/Message";

export default function App() {
  const [advice, setAdvice] = useState("Click GET ADVICE  Butuon");
  const [count, setCount] = useState(0);
  async function getAdvice() {
    const res = await fetch("https://api.adviceslip.com/advice");
    const data = await res.json();
    setAdvice(data.slip.advice);
    setCount((c) => c + 1);
  }
  return (
    <div className="wrapper">
      <h1 className="title_advice">{advice}</h1>
      <button className="button" on onClick={getAdvice}>
        Get Advice
      </button>
      <Message count={count} />
    </div>
  );
}
