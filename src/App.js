import React, { Component } from 'react';
import './App.css';
import Form from './components/Form';
import Table from './components/Table';
import Greeting from './components/Greeting';

class App extends Component {

  state = {
    greetingName: undefined,
    greetingCountry: undefined,
    greetingDay: undefined,
    greetingMonth: undefined,
    greetingAge: undefined
  };

  render() {
    return (
      <div className="App">
        <div className="CentralBox">
          <div className="Left">
            <Form />

            <Greeting 
              name = { this.state.greetingName }
              country = { this.state.greetingCountry }
              day = { this.state.greetingDay }
              month = { this.state.greetingMonth }
              age = { this.state.greetingAge }
            />
          </div>

          <div className="Right">
            <Table />
          </div>

          <div className="Footer">
            <span>Tiago Mendes</span>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
