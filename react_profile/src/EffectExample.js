import React, { useState, useEffect } from 'react';

function EffectExample() {
  const [count, setCount] = useState(0);

  // マウント時・count変更時に実行される副作用
  useEffect(() => {
    console.log(`カウントが更新されました: ${count}`);
  }, [count]); // ← count が変わるたびに発動

  return (
    <div>
      <h2>カウント: {count}</h2>
      <button onClick={() => setCount(count + 1)}>＋増やす</button>
    </div>
  );
}

export default EffectExample;
