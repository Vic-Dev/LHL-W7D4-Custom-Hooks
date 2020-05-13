import React from 'react';
import './MemeList.css';
import Meme from './Meme';

const MemeList = ({ memes }) => {
  const memesComponents = memes.map(({ title, url, id }) => <Meme title={title} url={url} key={id} />);

  return (
    <ul>
      {memesComponents}
    </ul>
  );
};

export default MemeList;
