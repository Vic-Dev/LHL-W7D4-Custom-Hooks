import { useState, useEffect } from 'react';
import axios from 'axios';

const useMemes = () => {
  const [search, setSearch] = useState('JavaScript');
  const [memes, setMemes] = useState([]);

  const formatMemes = (data) => {
    return data.map((d) => {
      return { url: d.data.url, title: d.data.title, id: d.data.id };
    });
  };

  useEffect(() => {
    // axios.get('https://api.imgflip.com/get_memes')
    axios.get(`https://www.reddit.com/r/ProgrammerHumor/search.json?q=${search}&sort=top&t=all&restrict_sr=true`)
      .then((res) => {
        console.log('data', res.data.data.children);
        const formattedMemes = formatMemes(res.data.data.children);
        console.log('formated', formattedMemes);
        setMemes(formattedMemes);
      })
      .catch((err) => console.log('didnt work:', err));
  }, [search]);

  return { memes, search, setSearch };
};

export default useMemes;
