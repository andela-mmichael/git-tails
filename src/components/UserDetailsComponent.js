import React from "react";
import RepoListComponent from "./RepoListComponent";

export default class UserDetailsComponent extends React.Component {
  render() {
    const { user, repos } = this.props.user;
    const RepoList = repos.length ? <RepoListComponent repos={this.props.repos} /> : null;

    return (
      <div>
        <ul className="user-details">
          <li><img src={user.avatar_url} alt="avatar" /> </li>
          <li>Name: {user.name}</li>
          <li>Company: {user.company}</li>
          <li>Email: {user.email}</li>
          <li>followers: {user.followers}</li>
          <li>Updated_At: {user.updated_at}</li>
          {/* <li><a onClick={getRepoList}>View repository list</a></li> */}
        </ul>
        {RepoList}
      </div>
    );
  }
}
