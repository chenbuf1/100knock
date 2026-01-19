import React, { useState } from 'react';

function FormList() {
  const [items, setItems] = useState([]);
  const [inputText, setInputText] = useState("");

  const handleAdd = () => {
    if (inputText.trim() === "") return;  // 空白处理
    setItems([...items, inputText]);
    setInputText(""); // 输入框清空
  };

  return (
    <div>
      <h2>入力フォームとリスト</h2>
      <input
        type="text"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        placeholder="入力してください"
      />
      <button onClick={handleAdd}>追加</button>

      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default FormList;
