import React, { Component } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import Search from '../Search/Search';

class Home extends Component {
    constructor() {
        super();
        this.state = {
            name: 'hello'
        }
    }

    render() {
        return (
            <div className="home">
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
                
                <p>{this.state.response}</p>
                <div className="navbar-nav mr-auto">
                    <Sidebar/>
                </div>
          </div>
        )
    }

}

export default Home;