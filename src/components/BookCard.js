import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import '../css/BookCard.css';

class BookCard extends Component {
    
  render() {
    return (
      <div>
          <NavLink to={`/books/${this.props.id}`}>
            <div className="card card-style">
                <div className="card-body">
                    <h4 className="card-title">Author: {this.props.title}</h4>
                    <p className="card-text">Genre: {this.props.genre}</p>
                    <p className="card-text">Author: {this.props.author}</p>
                    <p className="card-text">Read: {this.props.read}</p>
                </div>
            </div>
          </NavLink>
      </div>
      
    );
  }
}

export default BookCard;
