import React from "react";

export default class RepoListComponent extends React.Component {
  render() {
    console.log(this.props);
    return (
      <ul className="user-details">
        this.props.repos.map((repo) =>
          <li>{repo.name}></li>
          <li>{repo.description}</li>
          <li>{repo.url}</li>
          <li>{repo.forks_count}</li>
          <li>{repo.watchers_count}</li>
        );
      </ul>
    );
  }
}
