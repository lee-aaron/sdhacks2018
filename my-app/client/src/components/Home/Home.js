import React, { Component } from 'react';
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
            name: 'hello',
            query: '',
            apps_list: [
                {
                    name:'Google', 
                    steps: [
                        {
                            name: "Phone Interview",
                            date: "10-12-18",
                            description: "I think the phone interview went well but then I missed the KDT problem"
                        },
                        {
                            name: "Technical Interview",
                            date: "10-25-18",
                            description: "I missed the Two Sums problem on Leetcode"
                        },
                        {
                            name: "Dummy",
                            date: "Dummy Date",
                            description: "Fill Description"
                        }
                    ],
                    accepted: true,
                    rejected: false
                },
                {
                    name:'Apple', 
                    steps: [
                        {
                            name: "Phone Interview",
                            date: "10-12-18",
                            description: "I think the phone interview went well but then I missed the KDT problem"
                        },
                        {
                            name: "Technical Interview",
                            date: "10-25-18",
                            description: "I missed the Two Sums problem on Leetcode"
                        },
                        {
                            name: "Dummy",
                            date: "Dummy Date",
                            description: "Fill Description"
                        }
                    ],
                    accepted: false,
                    rejected: false
                },
                {
                    name:'AirBnB', 
                    steps: [
                        {
                            name: "Phone Interview",
                            date: "10-12-18",
                            description: "I think the phone interview went well but then I missed the KDT problem"
                        },
                        {
                            name: "Technical Interview",
                            date: "10-25-18",
                            description: "I missed the Two Sums problem on Leetcode"
                        },
                        {
                            name: "Dummy",
                            date: "Dummy Date",
                            description: "Fill Description"
                        }
                    ],
                    accepted: false,
                    rejected: false
                },
                {
                    name:'Lyft', 
                    steps: [
                        {
                            name: "Phone Interview",
                            date: "10-12-18",
                            description: "I think the phone interview went well but then I missed the KDT problem"
                        },
                        {
                            name: "Technical Interview",
                            date: "10-25-18",
                            description: "I missed the Two Sums problem on Leetcode"
                        },
                        {
                            name: "Dummy",
                            date: "Dummy Date",
                            description: "Fill Description"
                        }
                    ],
                    accepted: false,
                    rejected: false
                },
                {
                    name:'Google - Software Engineer Intern BS', 
                    steps: [
                        {
                            name: "Phone Interview",
                            date: "10-12-18",
                            description: "I think the phone interview went well but then I missed the KDT problem"
                        },
                        {
                            name: "Technical Interview",
                            date: "10-25-18",
                            description: "I missed the Two Sums problem on Leetcode"
                        },
                        {
                            name: "Dummy",
                            date: "Dummy Date",
                            description: "Fill Description"
                        }
                    ],
                    accepted: false,
                    rejected: false
                }
            ]
        }
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