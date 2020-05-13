import { useEffect, useState } from 'react';

const useMousePosition = () => {
  const [coords, setCoords] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const mouseMove = (event) => {
      const x = event.clientX + window.scrollX;
      const y = event.clientY + window.scrollY;
      setCoords({ x, y });
    };
    document.addEventListener('mousemove', mouseMove);

    return () => {
      document.removeEventListener('mousemove', mouseMove);
    };
  }, []);

  return coords;
};

export default useMousePosition;
