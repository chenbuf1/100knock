import React from 'react';
import './App.css';
import Profile from './Profile';
import Kid from './Kid_72';

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

function App() {
  return (
    <div className="App">
      <h1>自己紹介アプリ</h1>
      <Profile name="Bufan" age={25} />
    </div>
  );
}

export default App;
