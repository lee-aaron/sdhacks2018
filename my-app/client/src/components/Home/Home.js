import React, { Component } from 'react';
import logo from '../../logo.svg';
import Search from '../Search/Search';
import Sidebar from '../Sidebar/Sidebar';
import MainTable from '../MainTable/MainTable';
import Cards from '../Cards/Cards';

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
                <div class="body">
                <Sidebar/>
                <div class="information">
                    <MainTable/>
                    <Cards/>
                </div>
                </div> 
          </div>
        )
    }

}

export default Home;