/* 71
import React from 'react';
import './App.css';
import Profile from './Profile';
import Kid from './Kid_72';
import Counter from './Counter';
import FruitList from './FruitList';
import FormList from './FormList';
import EffectExample from './EffectExample';




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

/* 74
function App() {
  return (
    <div className="App">
      <h1>map練習</h1>
      <FruitList />
    </div>
  );
}
*/
/* 75
function App() {
  return (
    <div className="App">
      <h1>useState + フォーム入力</h1>
      <FormList />
    </div>
  );
}
*/

/*76
function App() {
  return (
    <div className="App">
      <h1>useEffectの練習</h1>
      <EffectExample />
    </div>
  );
}
*/

/*77
import Header from './Header';
import Main from './Main';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}
*/

/* 78
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import About from './About';

function App() {
  return (
    <Router>
      <div className="App">
        <h1>React Routerの練習</h1>

        <nav>
          <Link to="/">Home</Link> | <Link to="/about">About</Link>
        </nav>

        <hr />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

*/

// 86 App.js
import Posts from "./Posts";


function App() {
return (
<div>
<h1>Posts</h1>
<Posts />
</div>
);
}


export default App;



