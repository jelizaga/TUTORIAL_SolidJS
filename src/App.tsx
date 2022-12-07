import type { Component } from 'solid-js';
import Nav from './components/Nav';

const App: Component = () => {
  return (
    // We use `class` instead of the `className` used in React.
    <div>
      <Nav />
      <h1>App component</h1>
    </div>
  );
};

export default App;
