import React from "react";
import { Link } from "react-router-dom";

export default class UserDetailsComponent extends React.Component {
  render() {
    const { user, getRepos } = this.props;
    return (
      <div>
        <ul className="user-details">
          <li><img src={user.avatar_url} alt="avatar" /> </li>
          <li>Name: {user.name}</li>
          <li>Company: {user.company}</li>
          <li>Email: {user.email}</li>
          <li>followers: {user.followers}</li>
          <li>Updated_At: {user.updated_at}</li>
          <li><Link to="/repos" onClick={getRepos}>View repository list</Link></li>
        </ul>
      </div>
    );
  }
}
