import { Route, Routes } from 'solid-app-router';
import { Component, createEffect, createSignal } from 'solid-js';
import Nav from "./components/Nav";
import Home from './pages/Home';
import SavedRepos from './pages/SavedRepos';

// Set default state of `username`.
// `createSignal` is relatively equivalent to React's `useState`.
const [username, setUsername] = createSignal("jelizaga");
const [repos, setRepos] = createSignal([]);

const App: Component = () => {
  // `createEffect` is relatively equivalent to React's `useEffect`.
  createEffect(async () =>{
    const res = await fetch(`https://api.github.com/users/${username()}/repos?sort=created`);
    setRepos(await res.json());
  });
  return (
    // We use `class` instead of the `className` used in React.
    <div class="container">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/savedrepos" element={<SavedRepos />} />
      </Routes>
      <h1>App component</h1>
    </div>
  );
};

// We can export `username` & `setUsername` for anywhere else in our app.
export { username, setUsername, repos };
export default App;