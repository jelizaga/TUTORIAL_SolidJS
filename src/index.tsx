/* @refresh reload */
import { render } from 'solid-js/web';
import App from './App';
import { Router } from 'solid-app-router';
import 'bootstrap/dist/css/bootstrap.min.css';

render(() => 
  (
    // Wrapping `<App />` in `<Router>` allows us to use solid-app-router.
    <Router>
      <App />
    </Router>
  ),
  document.getElementById('root') as HTMLElement
);
