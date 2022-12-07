import { Component } from 'solid-js';
import { setSavedRepos, savedRepos } from '../pages/SavedRepos';

export type Repo = {
  id: string
  html_url: string
  name: string
  description: string
  stargazers_count: string
  owner: {
    login: string
  }
}

interface Props {
  repo: Repo
}

// 
const saveRepo = (repo: Repo) => {
  setSavedRepos([repo, ...savedRepos()]);
}

const unsaveRepo = (repoId: string) => {
  const nextState = savedRepos()?.filter(item => item.id !== repoId);
  setSavedRepos(nextState);
};

const repoIsSaved = (repoId: string) => {
 const repo = savedRepos()?.filter(item => item.id === repoId);
 return repo?.length > 0;
}

const RepoCard: Component<Props> = ({ repo }) => {
  return (
    <div class="card">
      <div class="card-header">&#11088; Stars: {repo.stargazers_count}</div>
      <div class="card-body">
        <a 
          href={repo.html_url} 
          class="h4 card-title text-decoration-none" 
          target="_blank" 
          rel="noreferrer">
          <strong>{repo.owner?.login}/{repo.name}</strong>
          <p class="card-text">{repo.description}</p>
          {repoIsSaved(repo.id) 
          ? (
            <button
              class="btn btn-danger" onclick={() => unsaveRepo(repo.id)}
            >
              Unsave
            </button>
          ) : (
            <button 
              class="btn btn-success" 
              onclick={() => 
                saveRepo(repo)
              }
            >
              Save
            </button>
          )}
        </a>
      </div>
    </div>
  )
}

export default RepoCard;