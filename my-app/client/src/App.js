import React, { Component } from 'react';

import logo from './logo.svg';

import './App.css';

class App extends Component {
  state = {
    message: ''
  };

  componentDidMount() {
    this.callApi()
      .then((res) => {
        console.log(res);
        console.log(res.express);
        this.setState({ response: `${res.field1} ${res.field2} ${res.field3 }`});
      })
      .catch(err => console.log(err));
  }

  callApi = async () => {
    const response = await fetch('/api/firebase/read');
    const body = await response.json();

    if (response.status !== 200) throw Error(body.message);

    return body;
  };

  render() {
    return (
      <div className="App">
        <p>{this.state.response}</p>
      </div>
    );
  }
}

export default App;