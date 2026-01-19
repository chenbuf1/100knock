import React from 'react';
import './App.css';
import Profile from './Profile';
import Kid from './Kid_72';
import Counter from './Counter';
import FruitList from './FruitList';

/* 71
function App() {
  return (
    <div className="App">
      <h1>Reactへようこそ</h1>
      <Profile />
    </div>
  );
}
*/

/* 72
function App() {
  return (
    <div className="App">
      <h1>自己紹介アプリ</h1>
      <Kid name="Bufan" age={25} />
    </div>
  );
}
*/

/* 73
function App() {
  return (
    <div className="App">
      <h1>useState カウンター</h1>
      <Counter />
    </div>
  );
}
*/

function App() {
  return (
    <div className="App">
      <h1>map練習</h1>
      <FruitList />
    </div>
  );
}


export default App;
