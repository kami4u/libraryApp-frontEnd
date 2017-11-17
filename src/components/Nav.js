import React from 'react';
import '../css/Nav.css';

class Nav extends React.Component {
  render() {
    return (
      <div>
          <h1 className="head">Library APP!</h1>
          {this.props.children}
      </div>
    );
  }
}

export default Nav;
