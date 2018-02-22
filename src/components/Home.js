import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Home extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-xs-11 col-xs-offset-11">
          <div>
          Your name is {this.props.name}, your age is {this.props.age}

          </div>
          <div>
          <h4>hobbiees</h4>
          <ul>
          {this.props.user.hobbies.map((hobby) => <li key={hobby}>{hobby}</li>)}
          </ul>
          </div>
          </div>
        </div>

      </div>
    );
  }
}

export default Home;

Home.propTypes = {
  name : PropTypes.string,
  age : PropTypes.number,
  user : PropTypes.object
}
