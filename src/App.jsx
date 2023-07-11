import React, { useState } from "react";

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
    <>
      <h1>{advice}</h1>
      <button on onClick={getAdvice}>
        Get Advice
      </button>
      <p>You Get {count} Advice Now!</p>
    </>
  );
}
