import React, { Component } from 'react';

function create_row(headers) {

    return (
        <th key={headers}>
            {headers}
        </th>
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
            <div className="table">
                <table>
                    <thead>
                        <tr>{ tableHeaders }</tr>
                    </thead>
                </table>
            </div>
        )
    }

}

export default MainTable