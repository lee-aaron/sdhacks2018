import React, { Component } from 'react';

class Search extends Component {

    render() {
        return (
            <form>
                <input
                    type="text"
                    placeholder = "Search"
                    onChange = {this.props.handleInputChange}
                />
            </form>
        )
    }

}

export default Search;