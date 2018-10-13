import React, { Component } from 'react';

import logo from './logo.svg';
<<<<<<< Updated upstream
import Search from './components/Search/Search';
=======
import Search from './components/Search';
import Sidebar from './components/Sidebar';
>>>>>>> Stashed changes

import './App.scss';
import './bootstrap.css';

class App extends Component {
  state = {
    message: '',
    response: '',
    name: 'SDHacks2018',
    query: '',
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

  handleInputChange = event => {
    this.setState({
        query: event.target.value
    })
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
        <nav className="navbar navbar-expand">
          <div className="navbar-nav mr-auto">
              <Sidebar onClick={this.openNavbar} />
          </div>
          <div className="navbar-brand">
            {this.state.name}
          </div>
          <div className="navbar-collapse">
            <div className="navbar-nav ml-auto">
              <Search onChange={this.handleInputChange} />
            </div>
          </div>
        </nav>

        <p>{this.state.response}</p>
      </div>
    );
  }
}

export default App;