import React, { Component } from 'react';
import axios from 'axios';
import logo from '../../logo.jpg';
import Search from '../Search/Search';
import Sidebar from '../Sidebar/Sidebar';
import MainTable from '../MainTable/MainTable';
import Cards from '../Cards/Cards';
import Add from '../Add/Add';

function add_row_to_application(object, updateList, index) {

    return (
        <Cards key={object.name} content={{
            name: object.name, 
            steps: object.steps,
            accepted: object.accepted,
            rejected: object.rejected,
        }} update={updateList} pos={index} />
    )
}

class Home extends Component {
    constructor() {
        super();
        this.state = {
            name: 'intern.demand',
            query: '',
            apps_list: []
        }
        this.intialize();
    }

    intialize() {
        let port = process.env.PORT || 5000;
        axios.get("http://localhost:" + port + "/api/company", {
            params: {
                user_id: "student"
            }
        })
            .then(res => {
                let array = Object.keys(res.data).map((key) => {
                    return res.data[key];
                })
                array.forEach((item) => {
                    if ( item.steps ) {
                        let steps = Object.keys(item.steps).map((key) => {
                            return item.steps[key];
                        });
                        item.steps = steps;
                    }
                })
                this.setState({
                    apps_list: array
                });
            }).catch(rejected => {
                console.log(rejected);
            });
    }

    handleInputChange = event => {
        this.setState({
            query: event.target.value,
            apps_list: this.state.apps_list
        });
    }

    updateList(updated_row, index) {
        let new_list = this.state.apps_list.slice();
        new_list[index] = updated_row;
        this.setState({
            apps_list: new_list
        });
        let port = process.env.PORT || 5000;
        axios.post("http://localhost:" + port + "/api/offer", {
            user_id: "student",
            company_id: index,
            accepted: updated_row.accepted,
            rejected: updated_row.rejected
        });
    }

    render() {

        return (
            <div className="home">
                <nav className="navbar navbar-expand">
                <img src={logo} width="100"/>
                <div className="navbar-brand">
                    {this.state.name}
                </div>
                <div className="navbar-collapse">
                    <div className="navbar-nav ml-auto">
                    <Search handleInputChange={this.handleInputChange} />
                    </div>
                </div>
                </nav>
                <div className="body">
                <Sidebar/>
                <div className="information">
                    <MainTable/>
                    {this.state.apps_list.filter((app) => {
                        return app.name.toLowerCase().startsWith(this.state.query.toLowerCase()) !== false;    
                    }).map((item, index) => add_row_to_application(item, this.updateList.bind(this), index))}
                    <Add />
                </div>
                </div> 
          </div>
        )
    }

}

export default Home;