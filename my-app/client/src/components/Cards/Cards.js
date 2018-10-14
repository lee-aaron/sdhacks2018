import React, { Component } from 'react';
import Popup from 'reactjs-popup';

function create_popup(entries) {
    return (
        <Popup key={entries.name} trigger={<div style={{ display: "inline-block", padding: "3px", margin: "5px", border: "1px solid black",
            borderRadius: "35%" }}>{entries.name}</div>} modal>
            <div style={{ display: "inline-block" }}>{entries.name}</div>
            <div style={{ display: "inline-block", float: "right" }}>{entries.date}</div>
            <div>{entries.description}</div>
        </Popup>
    )
}

class Cards extends Component {

    constructor(props) {
        super(props);
        this.state = {
            content: props.content
        };
    }

    changeReject() {
        this.state.content = {
            name: this.props.content.name,
            steps: this.props.content.steps,
            rejected: !this.state.content.rejected,
            accepted: this.state.content.accepted
        }
        if (this.state.content.accepted) {
            this.state.content = {
                name: this.props.content.name,
                steps: this.props.content.steps,
                rejected: this.state.content.rejected,
                accepted: false
            }
        }
        this.props.update(this.state.content, this.props.pos);
    }

    changeAccept() {
        this.state.content = {
            name: this.props.content.name,
            steps: this.props.content.steps,
            accepted: !this.state.content.accepted,
            rejected: this.state.content.rejected
        }
        if (this.state.content.rejected) {
            this.state.content = {
                name: this.props.content.name,
                steps: this.props.content.steps,
                rejected: false,
                accepted: this.state.content.accepted
            }
        }
        this.props.update(this.state.content, this.props.pos);
    }

    render() {

        return (
            <div className={"Row line " + (this.state.content.accepted ? "accepted" : "")}>
                <div className="column">
                    {this.props.content.name}
                </div>
                <div className="column">
                    {this.props.content.steps ? this.props.content.steps.map((item) => create_popup(item)) : null}
                </div>
                <div className="column">
                    <p className="format">Accepted</p>
                    <input type="checkbox" checked={this.state.content.accepted} onChange={this.changeAccept.bind(this)} />
                    <p className="format">Rejected</p>
                    <input type="checkbox" checked={this.state.content.rejected} onChange={this.changeReject.bind(this)} />
                </div>
            </div>
        );
    }

}

export default Cards;
