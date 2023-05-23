import NavBar from "@/component/NavBar";
import { useState } from "react";

export default function POtato() {
  const [count, setCount] = useState(0);

  //   JSX 에는 import React 안해도 됨. useState는 해야함.
  return (
    <div>
      <h1>WOW {count}</h1>
      <button onClick={() => setCount((prev) => prev + 1)}>+</button>
    </div>
  );
}
