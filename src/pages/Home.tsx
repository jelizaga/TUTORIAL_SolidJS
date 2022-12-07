import { Component, createEffect } from 'solid-js';
import { repos, setUsername, username } from '../App';

const Home: Component = () => {
  const refetchWithUsername = (event: Event) => {
    // Prevent reloading the page on click of submit button.
    event.preventDefault();
    // Get the `HTMLInputElement` in `#usernameInput`.
    const usernameInput = document.querySelector("#usernameInput") as HTMLInputElement;
    // Get the value of `usernameInput` (should be the value in 
    // `#usernameInput`.)
    setUsername(usernameInput.value);
  }

  // Waits for the data of `Home` to change before triggering, thanks to
  // `createEffect()`.
  createEffect(() => {
    console.log(repos());
  })

  return (
    <div>
      <form class="mb-3" onSubmit={(event) => refetchWithUsername(event) }>
        <input type="text" class="p-1 align-middle" id="usernameInput" required />
        <button class="btn btn-dark ms-3 w-auto">
          Fetch
        </button>
      </form>
      <h3>
        GitHub repos for {username()}
      </h3>
    </div>
  )
}

export default Home;