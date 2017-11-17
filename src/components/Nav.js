import React from 'react';
// import '../css/BooksList.css';

class Nav extends React.Component {
  render() {
    return (
      <div>
          <h1>Library APP!</h1>
          {this.props.children}
      </div>
    );
  }
}

export default Nav;
