import { Route, Routes } from 'solid-app-router';
import type { Component } from 'solid-js';
import Nav from "./components/Nav";
import Home from './pages/Home';
import SavedRepos from './pages/SavedRepos';

const App: Component = () => {
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

export default App;
