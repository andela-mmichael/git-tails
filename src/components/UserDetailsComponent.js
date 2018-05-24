import React from "react";
import RepoListComponent from "./RepoListComponent";

export default class UserDetailsComponent extends React.Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <ul className="user-details">
          <li><img src={this.props.user.avatar_url} alt="avatar" /> </li>
          <li>Name: {this.props.user.name}</li>
          <li>Company: {this.props.user.company}</li>
          <li>Email: {this.props.user.email}</li>
          <li>followers: {this.props.user.followers}</li>
          <li>Updated_At: {this.props.user.updated_at}</li>
        </ul>
        <RepoListComponent repos={this.props.repos} />
      </div>
    );
  }
}
