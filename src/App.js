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
    console.log(event.target.value);
    this.setState({ username: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    const username = this.state.username;
    axios.get(`https://api.github.com/users/${username}`)
      .then((response) => {
        this.setState({
          userDetails: response.data
        })
        return this.getRepoList(username);
      })
      .then((body) => {
        console.log(body);
        return this.setState({ repos: body.data });
      })
      .catch((err) => console.error(err));
  }

  getRepoList(username) {
    return axios.get(`https://api.github.com/users/${username}/repos`)
      .then((body) => {
        return body;
      }).catch((err) => console.error(err))
  }
  render() {
    const details = this.state.userDetails ?
      <UserDetailsComponent user={this.state.userDetails} repos={this.state.repos} />
      : '';

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gittails React App</h1>
        </header>

        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
        {details}
      </div>
    );
  }
}


export default App;
