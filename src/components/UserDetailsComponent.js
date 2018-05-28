import React from "react";
import { Link, Route  } from "react-router-dom";
import RepoListComponent from "./RepoListComponent";

export default class UserDetailsComponent extends React.Component {
  render() {
    const { user, repos, getRepos } = this.props;
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
          <li><a href="# " onClick={getRepos}>View repository list</a></li>
          {/* <li><Link to="/repos">View repository list</Link></li> */}
        </ul>
        {RepoList}
      </div>
    );
  }
}
