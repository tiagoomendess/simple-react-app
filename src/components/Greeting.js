import React, { Component } from 'react';
import './Greeting.js';

class Greeting extends Component {

    render () {
        return (
            <div>
                Hello { this.props.name } from { this.props.country }. On { this.props.day } 
                of { this.props.month } you will have { this.props.age } 
            </div>
        )
    }

}

export default Greeting;