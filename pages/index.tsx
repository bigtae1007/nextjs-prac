import React, { useState } from "react";

export default function home() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>useState 숫자 {count}</h1>
      <button
        onClick={() => {
          setCount((pre) => pre + 1);
        }}
      >
        클릭
      </button>
    </div>
  );
}
