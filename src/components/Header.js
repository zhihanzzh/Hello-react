import React from 'react';

const Header = (props) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-3">
          <h1>{props.homeLink}</h1>
        </div>
      </div>
    </div>
  );
}

export default Header;
