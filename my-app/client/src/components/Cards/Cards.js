import React, { Component } from 'react';
import Popup from 'reactjs-popup';

function create_popup(entries) {
    return (
        <Popup key={entries.name} trigger={<div style={{ display: "inline-block", padding: "5px"}}>{entries.name}</div>} modal> 
            <div style={{ display: "inline-block" }}>{ entries.name }</div>
            <div style={{ display: "inline-block", float: "right" }}>{ entries.date }</div>
            <div>{ entries.description }</div>
        </Popup>
    )
}

class Cards extends Component {
    constructor(props){
        super(props);
        this.state = {
            SampleContent: this.props.SampleContent,
        };
    }

    render() {
        return (
            <div className="Row line">
                <div className="column">
                    {this.state.SampleContent.name}
                </div>
                <div className="column">
                    {this.state.SampleContent.steps.map((item) => create_popup(item))}
                </div>
                <div className="column">
                    hello
                </div>
            </div>
          );
    }

}

export default Cards;
