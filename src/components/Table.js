import React, { Component } from 'react';
import './Table.css';

class Table extends Component {

    render () {
        return(
            <div>
                <table className="DataTable">
                    <thead>
                        <tr>
                            <th>name</th>
                            <th>Country</th>
                            <th>birthday</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td>Tiago</td>
                            <td>Portugal</td>
                            <td>21/06/1996</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Table;
