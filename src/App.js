import React, { Component } from 'react';
import './App.css';
import Form from './components/Form';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="CentralBox">
          <div className="Left">
            <Form />
          </div>

          <div className="Right">

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
