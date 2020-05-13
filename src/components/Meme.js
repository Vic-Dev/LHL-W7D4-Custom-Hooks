import React from 'react';
import './Meme.css';

const Meme = ({ title, url }) => {
  return (
    <li>
      <h4>{title}</h4>
      <img src={url} />
    </li>
  );
};

export default Meme;
