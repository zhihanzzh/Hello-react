import React, { Component } from 'react';

import Header from './components/Header';
import Home from './components/Home';

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-3">
            <Header />
          </div>
        </div>
        <div className="row">
          <div className="col-3">
            <h1>Hello React</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-3">
            <Home />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
