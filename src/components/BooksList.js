import React, { Component } from 'react';
import request from 'axios';
import {ROOT} from '../config';

import BookCard from './BookCard';
import '../css/BooksList.css';

class BooksList extends Component {
  constructor (props) {
    super(props);
    this.state = {
        list: []
    };
}
  componentDidMount () {
    request.get(`${ROOT}/books`)
        .then((res) => {
          console.log(res.data);
            this.setState({list: res.data});
        })
        .catch((error) => {console.log(error);});
}
  render() {
    return (
      <div className="container">
        {this.state.list.map((book,i) => {
          return <BookCard key={i}
            id={book._id}
            title={book.title}
            genre={book.genre}
            author={book.author}
            read={book.read}
          />;
        })}
      </div>
    );
  }
}

export default BooksList;
