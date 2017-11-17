import React from 'react';
import '../css/Nav.css';

class Nav extends React.Component {
  render() {
    return (
      <div className="container">
          <h1 className="head">Library APP!</h1>
          <h4>List of Books available!</h4>
          {this.props.children}
      </div>
    );
  }
}

export default Nav;
