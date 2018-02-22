import React, { Component } from 'react';

import Header from './components/Header';
import Home from './components/Home';

class App extends Component {
  constructor() {
    super();
    this.state = {
      homeLink: "Home"
    }
  }
  onGreet(age) {
    alert(age);
  }

  onChangeLinkName(newName) {
    this.setState({
      homeLink:newName
    })
  }
  render() {
    const user = {
      name: "nancy",
      hobbies: ["computer games", "ski"]
    }
    return (
      <div className="container">
        <div className="row">
          <div className="col-xs-11 col-xs-offset-11">
            <Header homeLink={this.state.homeLink} />
          </div>
        </div>
        <div className="row">
          <div className="col-xs-11 col-xs-offset-11">
            <h1>Hello React</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-11 col-xs-offset-11">
            <Home name={"max"} initialAge={12} user={user} greet={this.onGreet} changeLink={this.onChangeLinkName.bind(this)} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
