import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Home extends Component {
  constructor(props) {
    super(props);
    this.age = this.props.age;
  }

  onMakeOlder() {
    this.age += 3;
    console.log(this);
  }
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-xs-11 col-xs-offset-11">
            <div>
              Your name is {this.props.name}, your age is {this.props.age}

            </div>
           <button onClick={() => {this.onMakeOlder()}} className="btn btn-primary"> Make me older</button>
          </div>
        </div>

      </div>
    );
  }
}

export default Home;

Home.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
  user: PropTypes.object,
  children: PropTypes.element.isRequired
}
