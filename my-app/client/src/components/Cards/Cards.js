import React, { Component } from 'react';
import Popup from 'reactjs-popup';

class Cards extends Component {
    constructor(props){
        super(props);
        this.state = {
            SampleContent: this.props.SampleContent,
        };
    }

    render() {
        return (
            <div className="Row">
                <div className="column">
                    {this.state.SampleContent.name}
                </div>
                <div className="column">
                    <Popup trigger={<div>{this.state.SampleContent.steps}</div>} modal> 
                        "Fake Info"
                    </Popup>
                </div>
                <div className="column">
                    hello
                </div>
            </div>
          );
    }

}

export default Cards;
