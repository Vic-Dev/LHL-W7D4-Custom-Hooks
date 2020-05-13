import React, { useState } from 'react';
import './App.css';
import MemesList from './components/MemeList';
import useCount from './hooks/useCount';
import useMemes from './hooks/useMemes';
import useMousePosition from './hooks/useMousePosition';

function App() {
  const [value, setValue] = useState('JavaScript');
  const { count, setCount } = useCount();
  const { memes, search, setSearch } = useMemes();
  const { x, y } = useMousePosition();

  console.log(memes, x, y);

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
        <h1>{search} Memes</h1>
        <form onSubmit={() => setSearch(value)}>
          <label>
            Search:
            <input type="text" value={value} onChange={(ev) => setValue(ev.target.value)} />
          </label>
          <input type="submit" value="Search" />
        </form>
        <MemesList memes={memes} />
      </section>
    </div>
  );
}

export default App;
