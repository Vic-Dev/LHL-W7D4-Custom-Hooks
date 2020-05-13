import React, { useState } from 'react';
import './Subreddit.css';
import MemeList from './MemeList';
import useMemes from '../hooks/useMemes';

const Subreddit = ({ subreddit, defaultSearch }) => {
  const [value, setValue] = useState(defaultSearch);
  const { memes, search, setSearch } = useMemes({ defaultSearch, subreddit });

  return (
    <div>
      <h1>{subreddit}</h1>
      <h3>{search} Memes</h3>
      <form onSubmit={() => setSearch(value)}>
        <label>
          Search:
            <input type="text" value={value} onChange={(ev) => setValue(ev.target.value)} />
        </label>
        <input type="submit" value="Search" />
      </form>
      <MemeList memes={memes} />
    </div>
  );
};

export default Subreddit;
