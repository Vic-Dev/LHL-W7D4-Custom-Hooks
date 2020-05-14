# Custom Hooks

## Overview
- Create React App from scratch
  - `npx create-react-app my-app`
  - `npm install --save-dev @testing-library/react-hooks`
  - `npm install --save-dev react-test-renderer@"^16.13.1" // should be same version as react`
  - `@types/jest`

- Custom hook introduction
  - useCount
- TDD (Test Driven Development)
  - useMousePosition
- Meme App
  - useMemes
  - custom hook with axios call to search subreddits
  - MemeList and Meme components
  - Subreddit component

## What?
- Reusable logic
- A convention, not something you import from React

### Rules of Hooks
1. Only call hooks from the top-level of a function component or a custom hook.
    - **CANNOT** be called in React class components, loops, if statements, regular functions, event handlers.
2. A custom hook **MUST** start with the keyword "use".
    - This is how React determines that your function is a custom hook.
    - A custom hook can call other custom or built-in hooks.

### Therefore...
```js
// allowed?
const TweetList = () => {
  const [user, setUser] = useState(null);

  if (user) {
    useEffect(() => {
      axios
        .get('/api/tweets/')
        .then((res) => console.log(res.data));
    });
  }

  return (<div>...<div>);
}
```

## Why?
- DRY (don't repeat yourself) code
  - Similar to when we want to share logic between two regular Javascript functions.
- Separating logic

## Where?
- Hooks folder

## When?
- Request logic
- Event logic
- Reusable similar state logic
  - ***Note***: Multiple components using the same custom hook **do not** share state
  - Every time you use a custom Hook, all state and effects inside of it are fully isolated

