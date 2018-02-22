import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state ={
      age: props.initialAge,
      homeLink: "changed"
    }
  }

  onMakeOlder() {
    this.setState({
      age: this.state.age + 3
    })
  }

  handleGreet() {
    this.props.greet(this.state.age)
  }

  onChangeLink() {
    this.props.changeLink(this.state.homeLink);
  }
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-xs-11 col-xs-offset-11">
            <div>
              Your name is {this.props.name}, your age is {this.state.age}
            </div>
           <button onClick={() => {this.onMakeOlder()}} className="btn btn-primary"> Make me older</button>
           <hr />
           <button onClick={this.handleGreet.bind(this)} className="btn btn-primary">greet</button>
           <hr />
           <button onClick={this.onChangeLink.bind(this)} className="btn btn-primary">change link</button>
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
  greet: PropTypes.func
}
