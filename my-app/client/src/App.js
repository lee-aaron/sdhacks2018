import React, { Component } from 'react';

import logo from './logo.svg';
import Search from './Search';

import './App.css';
import './bootstrap.css';

class App extends Component {
  state = {
    response: '',
    name: 'SDHacks2018',
    query: '',
  };

  componentDidMount() {
    this.callApi()
      .then(res => this.setState({ response: res.express }))
      .catch(err => console.log(err));
  }

  handleInputChange = event => {
    this.setState({
        query: event.target.value
    })
  }

  callApi = async () => {
    const response = await fetch('/api/hello');
    const body = await response.json();

    if (response.status !== 200) throw Error(body.message);

    return body;
  };

  render() {

    return (
      <div className="App">
        {/*<header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>*/}
        <p className="App-intro">{this.state.response}</p>
        <nav className="navbar navbar-expand">
          <div className="navbar-brand">
            {this.state.name}
          </div>
          <div className="navbar-collapse">
            <div className="navbar-nav ml-auto">
              <Search onChange={this.handleInputChange} />
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default App;