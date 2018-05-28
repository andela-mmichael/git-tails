import React, { Component } from 'react';
import UserDetailsComponent from "./components/UserDetailsComponent";
import './App.css';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      userDetails: null,
      repos: []
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ username: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    const username = this.state.username;
    axios.get(`https://api.github.com/users/${username}`)
      .then((response) => this.setState({ userDetails: response.data }))
      .catch((err) => console.error(err));
  }

  getRepoList(username) {
    return axios.get(`https://api.github.com/users/${username}/repos`)
      .then(body => this.setState({ repos: body.data }))
      .catch((err) => console.error(err))
  }

  render() {
    const UserDetails = this.state.userDetails ?
      <UserDetailsComponent
        user={this.state.userDetails}
        repos={this.state.repos}
        getRepos={this.getRepoList.bind(this, this.state.username)}
      />
      : null;

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gittails React App</h1>
        </header>

        <form onSubmit={this.handleSubmit}>
          <label> Github Name: &nbsp;
            <input type="text" value={this.state.username} onChange={this.handleChange} />
          </label> <br/><br/>
          <input type="submit" value="Submit" />
        </form>
        {UserDetails}
      </div>
    );
  }
}


export default App;
