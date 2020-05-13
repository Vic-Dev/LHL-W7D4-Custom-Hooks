import React from 'react';
import './App.css';
import Subreddit from './components/Subreddit';

import useCount from './hooks/useCount';
import useMousePosition from './hooks/useMousePosition';

function App() {
  const { count, setCount } = useCount();
  const { x, y } = useMousePosition();

  // console.log(x, y);

  const scrollToMemes = (ev) => {
    document.getElementById('memes').scrollIntoView({
      behavior: 'smooth', // smooth scroll
      // block: 'start' // the upper border of the element will be aligned at the top of the visible part of the window of the scrollable area.
    });
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-hello">Hello Meme World</h1>
        <h2>{count}</h2>
        <div>
          <button className="App-button" onClick={() => setCount(count + 1)}><h2>+ 1</h2></button>
          <button className="App-button" onClick={() => setCount(count - 1)}><h2>- 1</h2></button>
        </div>
        <button className="App-button" onClick={scrollToMemes}><h2>Scroll to Memes?</h2></button>
      </header>
      <section id="memes">
        <Subreddit subreddit="ProgrammerHumor" defaultSearch="JavaScript" />
        <Subreddit subreddit="aww" defaultSearch="Cats" />
      </section>
    </div>
  );
}

export default App;
