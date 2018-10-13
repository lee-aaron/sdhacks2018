import React, { Component } from 'react';

class Sidebar extends Component {

    state = {
        active: []
    }

    isActive(index) {
        if (this.state.active.length < index) {
            this.setState({
                active: this.state.active.concat([false])
            })
        }
        let new_active = this.state.active.slice();
        new_active[index] = !new_active[index];
        this.setState({active: new_active});
    }

    unique_links(path, text, index) {
        return (
            <a className={this.state.active[index] ? "active" : "not_active"} key={path} href={path} onClick={this.isActive.bind(this, index)}>{text}</a>
        )
    }

    render() {

        let a_links = [
            [ "#archived", "Archived"],
            [ "#blank", "Test"],
            [ "#test", "Test 2"]
        ].map((item, index) => this.unique_links(item[0], item[1], index));

        return (
            <div className="sidebar">
                <a href="https://intern.supply/">Application Links</a>
                {a_links}
            </div>
        );
    }

}

export default Sidebar;
