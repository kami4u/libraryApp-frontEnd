import React, { Component } from 'react';

class BookCard extends Component {
    
  render() {
    return (
      <div>
          <p>{this.props.title}</p>
          <p>{this.props.genre}</p>
          <p>{this.props.author}</p>
          <p>{this.props.read}</p>
      </div>
    );
  }
}

export default BookCard;
