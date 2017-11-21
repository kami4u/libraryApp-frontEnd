import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';

class BookCard extends Component {
    
  render() {
    return (
      <div>
          <NavLink to={`/books/${this.props.id}`}>
            <div className="card">
              <img src={this.props.img} height="300" width="200" alt="Card image caption" />
              <p className="card-text">{this.props.author}</p>
            </div>
          </NavLink>
      </div>
      
    );
  }
}

export default BookCard;
