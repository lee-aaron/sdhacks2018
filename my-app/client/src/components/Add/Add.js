import React, { Component } from 'react';
import Popup from 'reactjs-popup';

class Add extends Component {
    render() {
        return (
            <div className="Add">
                <Popup trigger={<div>+</div>} modal>
                    <form style={{display: "inline-block", textAlign: "center"}} >
                        <input style={{display: "block"}} placeholder="Company Name" />
                        <input style={{display: "block"}} placeholder="Interview" />
                    </form>
                </Popup>
            </div>
        )
    }
}

export default Add