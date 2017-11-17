import React, { Component } from 'react';
import '../css/BookCard.css';

class BookCard extends Component {
    
  render() {
    return (
      <div>
          <div className="card" style={{width: 20 + 'rem', marginBottom: 5 + 'px'}}>
            <div className="card-body">
                <h4 className="card-title">Author: {this.props.title}</h4>
                <p className="card-text">Genre: {this.props.genre}</p>
                <p className="card-text">Author: {this.props.author}</p>
                <p className="card-text">Read: {this.props.read}</p>
            </div>
            </div>
      </div>
    );
  }
}

export default BookCard;
