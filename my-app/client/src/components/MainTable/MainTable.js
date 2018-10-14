import React, { Component } from 'react';

function create_row(headers) {

    return (
        <div className="column_two" key={headers}>
            {headers}
        </div>
    )
}

class MainTable extends Component {

    render() {

        let tableHeaders = [
            "Applied To",
            "Interview",
            "Offer"
        ].map((entry) => create_row(entry));

        return (
            <div className="headers Row">
                { tableHeaders }
            </div>
        )
    }

}

export default MainTable