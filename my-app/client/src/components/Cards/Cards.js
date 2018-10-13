import React, { Component } from 'react';

const SampleContent = {
    name:'Google',
    steps:'Phone Screen',
  };

class Cards extends Component {
    constructor(props){
        super(props);
        console.log(this.props);
    }

    render() {
        return (
            <div className="Row">
                <div class="column">
                    SampleContent.name
                </div>
                <div class="column">
                    SampleContent.steps
                </div>
                <div class="column">
                    hello
                </div>
            </div>
          );
    }

}

export default Cards;
