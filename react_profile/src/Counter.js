import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>カウント: {count}</h2>
      <button onClick={() => setCount(count + 1)}>＋ 増やす</button>
      <button onClick={() => setCount(count - 1)}>－ 減らす</button>
    </div>
  );
}

export default Counter;
