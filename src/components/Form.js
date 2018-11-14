import React, { Component } from 'react';
import './Form.css';

class Form extends Component {
    render () {
        return (
            <div>
                <form>
                    <input type="text" name="firstname" placeholder="Name here"></input>
                    <input type="text" name="surname" placeholder="Name here"></input>
                    <select name="country">
                        <option>Country</option>
                    </select>
                    <input type="text" name="birthdate" placeholder="dd/mm/yyyy"></input>
                </form>
            </div>
        )
    }
        
}

export default Form;