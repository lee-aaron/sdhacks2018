import React, { Component } from 'react';
import logo from '../../logo.jpg';
import Search from '../Search/Search';
import Sidebar from '../Sidebar/Sidebar';
import MainTable from '../MainTable/MainTable';
import Cards from '../Cards/Cards';
import Add from '../Add/Add';

function add_row_to_application(object) {
    return (
        <Cards key={object.name} SampleContent={{
            name: object.name, 
            steps: object.steps,
        }}/>
    )
}

class Home extends Component {
    constructor() {
        super();
        this.state = {
            name: 'hello',
            query: '',
            apps_list: []
        }
    }

    handleInputChange = event => {
        this.setState({
            query: event.target.value
        });
    }

    render() {

        this.state.apps_list = [
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
                ]
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
                ]                
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
                ]          
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
                ]
            }
        ].filter((app) => {
            return app.name.toLowerCase().startsWith(this.state.query.toLowerCase()) !== false;
        }).map((app) =>
            add_row_to_application(app)  
        );

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
                    {this.state.apps_list}
                    <Add />
                </div>
                </div> 
          </div>
        )
    }

}

export default Home;