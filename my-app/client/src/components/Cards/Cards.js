import React, { Component } from 'react';
import Popup from 'reactjs-popup';

function create_popup(entries) {
    return (
        <Popup key={entries.name} trigger={<div style={{ display: "inline-block", padding: "5px", border: "1px solid black"}}>{entries.name}</div>} modal> 
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
            content: props.content
        };
        this.changeAccept = this.changeAccept.bind(this);
        this.changeReject = this.changeReject.bind(this);
    }

    changeReject() {
        this.setState({
            content: {
                rejected: !this.props.content.rejected,
                accepted: this.props.content.accepted
            }
        });
        if ( this.state.content.accepted ) {
            this.setState({
                content: {
                    rejected: !this.state.content.rejected,
                    accepted: !this.state.content.accepted
                }
            });
        }
        this.props.update = this.state.content;
    }

    changeAccept() {
        this.setState({
            content: {
                accepted: !this.state.content.accepted,
                rejected: this.state.content.rejected
            }
        });
        if ( this.state.content.rejected ) {
            this.setState({
                content: {
                    rejected: !this.state.content.rejected,
                    accepted: !this.state.content.accepted
                }
            });
        }
        this.props.update = this.state.content;
    }

    render() {
        return (
            <div className={"Row line " + (this.state.content.accepted && !this.state.content.rejected ? "accepted" : "")}>
                <div className="column">
                    {this.props.content.name}
                </div>
                <div className="column">
                    {this.props.content.steps.map((item) => create_popup(item))}
                </div>
                <div className="column">
                    <p className="format">Accepted</p>
                    <input type="checkbox" checked={this.state.content.accepted} onChange={this.changeAccept}/>
                    <p className="format">Rejected</p>
                    <input type="checkbox" checked={this.state.content.rejected} onChange={this.changeReject} />
                </div>
            </div>
          );
    }

}

export default Cards;
