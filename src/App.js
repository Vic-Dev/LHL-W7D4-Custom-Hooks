import React from 'react';
import './App.css';
import Subreddit from './components/Subreddit';

import useCount from './hooks/useCount';
import useMousePosition from './hooks/useMousePosition';

function App() {
  const { count, increment, decrement } = useCount();
  const { x, y } = useMousePosition();

  // console.log(x, y);
  // console.log('update');

  const scrollToMemes = (ev) => {
    document.getElementById('memes').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="App">
      <div className="App-mouse" style={{ left: `${x}px`, top: `${y}px` }}>x: {x}, y: {y}</div>
      <header className="App-header">
        <h1 className="App-hello">Hello Meme World</h1>
        <h2>{count}</h2>
        <div>
          <button className="App-button" onClick={increment}><h2>+ 1</h2></button>
          <button className="App-button" onClick={decrement}><h2>- 1</h2></button>
        </div>
        <button className="App-button" onClick={scrollToMemes}><h2>Scroll to Memes?</h2></button>
      </header>
      <section id="memes">
        <Subreddit subreddit="ProgrammerHumor" defaultSearch="JavaScript" />
        {/* <Subreddit subreddit="aww" defaultSearch="Cat" /> */}
        <Subreddit subreddit="funny" defaultSearch="Panda" />
      </section>
    </div>
  );
}

export default App;
