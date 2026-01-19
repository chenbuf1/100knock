import React from 'react';

function FruitList() {
  const fruits = ['りんご', 'バナナ', 'みかん', 'ぶどう'];

  return (
    <div>
      <h2>果物リスト</h2>
      <ul>
        {fruits.map((fruit, index) => (  //map() を使ってリストを動的に表示している
          <li key={index}>{fruit}</li>
        ))}  
      </ul>
    </div>
  );
}//key 属性は index で設定

export default FruitList;
