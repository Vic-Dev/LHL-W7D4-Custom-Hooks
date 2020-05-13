import React from 'react';
import './Meme.css';

const Meme = ({ title, url }) => {
  return (
    <li>
      <h3>{title}</h3>
      <img src={url} width="500" />
    </li>
  );
};

export default Meme;
