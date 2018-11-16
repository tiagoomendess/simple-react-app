import React, { Component } from 'react';
import './Form.css';

class Form extends Component {

    state = {
        countries: []
    };

    constructor() {
        super();
        this.getCountries();
    }

    getCountries = async () => {
        const api_request = await fetch('https://restcountries.eu/rest/v2/all');
        const data = await api_request.json();
        this.setState({
            countries: data
        });

    }

    render () {
        return (
            <div>
                <form>
                    <div className="form-field">
                        <label>Name: </label>
                        <input type="text" name="firstname" placeholder="Name here"></input>
                    </div>

                    <div  className="form-field">
                        <label>Surname: </label>
                        <input type="text" name="surname" placeholder="Name here"></input>
                    </div>

                    <div className="form-field">
                        <label>Country: </label>
                        <select name="country">
                            <option disabled>Select Country</option>
                        </select>
                    </div>

                    <div className="form-field">
                        <label>Birthday: </label>
                        <input type="text" name="birthdate" placeholder="dd/mm/yyyy"></input>
                    </div>
                    
                    <div className="SubmitButton">
                        <button type="submit">Save</button>
                    </div>
                    
                    
                </form>
            </div>
        )
    }
        
}

export default Form;