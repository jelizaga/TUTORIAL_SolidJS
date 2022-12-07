import { Component } from 'solid-js';

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

const RepoCard: Component<Props> = ({ repo }) => {
  return (
    <div>
      <div class="card-header">&#11088; Stars: {repo.stargazers_count}</div>
      <div class="card-body">
        <a 
          href={repo.html_url} 
          class="h4 card-title text-decoration-none" 
          target="_blank" 
          rel="noreferrer">
          <strong>{repo.owner?.login}/{repo.name}</strong>
          <p class="card-text">{repo.description}</p>
          <button class="btn btn-success">Save</button>
        </a>
      </div>
    </div>
  )
}

export default RepoCard;