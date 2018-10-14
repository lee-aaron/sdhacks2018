import React, { Component } from 'react';
import Popup from 'reactjs-popup';
import AddInterview from '../AddInterview/AddInterview'

class Add extends Component {
    company = {
        steps: [{name:"", description:"", date: ""}],
        name: "",
        accepted: false,
        rejected: false
    }

    handleChange = (e) => {
        if (["name", "description"].includes(e.target.className) ) {
          let steps = [...this.company.steps]
          this.setState({ steps }, () => console.log(this.company.steps))
        } else {
          this.setState({ [e.target.name]: e.target.value })
        }
    }

    addInterview = (e) => {
        this.setState((prevsteps) => ({
          steps: [...prevsteps.steps, {name:"", description:"", date:""}],
        }));
      }

    handleSubmit = (e) => { e.preventDefault() }

    render() {
        let {name, steps} = this.company
        return (
            <div className="Add">
                <Popup trigger={<div className="plus">+</div>} modal>
                    <form style={{display: "inline-block", textAlign: "center"}} onSubmit={this.handleSubmit} onChange={this.handleChange}>
                        <label htmlFor="name">Company Name</label> 
                        <input className="input" type="text" id="compName" value={name} style={{display: "block"}}/>
                        <button onClick={this.addInterview}>Add new interview</button>
                        <AddInterview steps={steps} />
                        <input type="submit" value="Submit" />
                    </form>
                </Popup>
            </div>
        )
    }
}

export default Add