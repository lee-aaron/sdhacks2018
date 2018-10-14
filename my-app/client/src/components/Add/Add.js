import React, { Component } from 'react';
import Popup from 'reactjs-popup';
import axios from 'axios';

class Add extends Component {
    
    constructor(props) {
        super(props);
        let port = process.env.PORT || 5000;
        axios.get("http://localhost:" + port + "/api/company", {
            params: {
                user_id: "student"
            }
        }).then(res => {
            this.state.index = res.data.length + 1;
        });
    }

    state = {
        steps: {name:"", description:"", date: ""},
        name: "",
        accepted: false,
        rejected: false,
        index: 0
    }

    updateName(e) {
        this.state.name = e.target.value;
    }

    updateStepName(e) {
        this.state.steps.name = e.target.value;
    }

    updateStepDescription(e) {
        this.state.steps.description = e.target.value;
    }

    updateStepDate(e) {
        this.state.steps.date = e.target.value;
    }

    submitInfo(e) {
        let port = process.env.PORT || 5000;
        axios.post("http://localhost:" + port + "/api/company", {
            user_id: "student",
            name: this.state.name,
        }).then(res => {
            console.log(res)
        });
    }

    submitSteps(e) {
        let port = process.env.PORT || 5000;
        axios.post("http://localhost:" + port + "/api/steps", {
            user_id: "student",
            name: this.state.steps.name,
            company_id: this.state.name,
            date: this.state.steps.date,
            description: this.state.steps.description,

        }).then(res => {
            console.log(res);
        });
    }

    render() {

        return (
            <div className="Add">
                <Popup trigger={<div className="plus">+</div>} modal>
                    <form>
                        <div>Enter the Company Name to Add: </div>
                        <input type="text" placeholder="Company Name" onChange={this.updateName.bind(this)} />
                        <button onClick={this.submitInfo.bind(this)}>Submit</button>
                    </form>
                </Popup>
                <Popup trigger={<div className="plus">+</div>} modal>
                    <form>
                        <div>Enter Interviews for Company: </div>
                        <input type="text" placeholder="Company Name" onChange={this.updateName.bind(this)} />
                        <div></div>
                        <input type="text" placeholder="Interview Title" onChange={this.updateStepName.bind(this)}/>
                        <div></div>
                        <input type="text" placeholder="Date" onChange={this.updateStepDate.bind(this)}/>
                        <div></div>
                        <input type="text" placeholder="Description" onChange={this.updateStepDescription.bind(this)}/>
                        <button onClick={this.submitSteps.bind(this)}>Submit</button>
                    </form>
                </Popup>
            </div>
        )
    }
}

export default Add