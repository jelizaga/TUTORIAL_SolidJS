import { Component, createSignal, For } from 'solid-js';
import RepoCard, { Repo } from '../components/RepoCard';

const [savedRepos, setSavedRepos] = createSignal([]);

const SavedRepos: Component = () => {
  return (
    <div>
      <h2>Your saved repos</h2>
      <For each={savedRepos()}>
        {(repo: Repo) => <RepoCard repo={repo} />}
      </For>
    </div>
  )
}

export { setSavedRepos };
export default SavedRepos;