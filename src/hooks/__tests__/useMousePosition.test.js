import React from 'react';
import { renderHook, act } from '@testing-library/react-hooks';
import useMousePosition from '../useMousePosition';
import { fireEvent, render } from '@testing-library/react';
import App from '../../App';

test('it should have default values', () => {
  const { result } = renderHook(() => useMousePosition());
  expect(result.current.x).toBe(0);
  expect(result.current.y).toBe(0);
});

test('it should return current x and y mouse positions', () => {
  const { result } = renderHook(() => useMousePosition());
  const { getByText } = render(<App />);
  act(() => {
    fireEvent(
      getByText(/Hello Meme World/i),
      new MouseEvent('mousemove', {
        bubbles: true,
        cancelable: true,
        clientX: 200,
        clientY: 200
      })
    );
  });
  expect(result.current.x).toBe(200);
  expect(result.current.y).toBe(200);
});

