import React, { Component } from 'react';
import Popup from 'reactjs-popup';

class Add extends Component {
    
    state = {
        steps: [{name:"", description:"", date: ""}],
        name: "",
        accepted: false,
        rejected: false
    }

    render() {

        return (
            <div className="Add">
                <Popup trigger={<div className="plus">+</div>} modal>
                    <form style={{display: "inline-block", textAlign: "center"}} onSubmit={this.handleSubmit} onChange={this.handleChange}>
                        <label htmlFor="name">Company Name</label> 
                        <input className="input" type="text" id="compName" value={name} style={{display: "block"}} onChange={this.updateCompanyName}/>
                        <button>Add new interview</button>
                        <input type="submit" value="Submit" />
                    </form>
                </Popup>
            </div>
        )
    }
}

export default Add