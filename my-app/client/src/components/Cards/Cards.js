import React, { Component } from 'react'; 

class Cards extends Component {
    constructor(props){
        super(props);
        console.log(this.props);
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
                    {this.state.SampleContent.steps}
                </div>
                <div className="column">
                    hello
                </div>
            </div>
          );
    }

}

export default Cards;
