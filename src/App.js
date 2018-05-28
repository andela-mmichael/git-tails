import React, { Component } from 'react';
import UserDetailsComponent from "./components/UserDetailsComponent";
import { HashRouter, Route, BrowserRouter, Link } from "react-router-dom";
import dotenv from "dotenv";
import './App.css';
import axios from 'axios';
dotenv.config();

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
    axios.get(`https://api.github.com/users/${username}?
      client_id=${process.env.REACT_APP_CLIENT_ID}&&client_secret=${process.env.REACT_APP_CLIENT_SECRET}`)
      .then((response) => this.setState({ userDetails: response.data }))
      .catch((err) => console.error(err));
  }

  getRepoList(username) {
    return axios.get(`https://api.github.com/users/${username}/repos?
      client_id=${process.env.REACT_APP_CLIENT_ID}&&client_secret=${process.env.REACT_APP_CLIENT_SECRET}`)
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
        {/* <SearchComponent /> */}
        <form onSubmit={this.handleSubmit}>
          <label> Github Name: &nbsp;
            <input type="text" value={this.state.username} onChange={this.handleChange} />
          </label> <br /><br />
          <input type="submit" value="Submit" />
        </form>


        {/* <button type="button" className="btn btn-large btn-block btn-default">Go to Landing</button> */}
        {/* <HashRouter>
          <Route path="/land" component={landing} />
        </HashRouter> */}

        {UserDetails}
      </div>
    );
  }
}

function SearchComponent(props) {
  return (
    <form noValidate>
    {/* <form onSubmit={this.handleSubmit}> */}
      <label> Github Name: &nbsp;
        <input type="text" value={this.state.username} onChange={this.handleChange} />
      </label> <br /><br />
      <input type="submit" value="Submit" />
      {/* <input type="submit" value="Submit" onClick={props.handleSubmit}/> */}
    </form>
  );
}

function Landing(params) {
  return (
    <div>
      <p>We are at the landing page.</p>
    </div>
  )
}

function Contact(params) {
  return (
    <div>
      <p>We are at the landing page.</p>
    </div>
  );
}


export default App;
