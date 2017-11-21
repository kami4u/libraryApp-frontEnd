import React, { Component } from 'react';
import request from 'axios';
import {ROOT} from '../config';

import BookCard from './BookCard';
import Search from './Search';
import List from './List';
import filterBooks from '../utils/main';
import '../css/BooksList.css';

class BooksList extends Component {
  constructor (props) {
    super(props);
    this.state = {
        list: [],
        books: [],
        searchTerm: ''
    };
    this.handleChange = this.handleChange.bind(this);
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
    const filteredBooks = filterBooks(this.state.books, this.state.searchTerm);
    return (
      <div className="album text-muted">
        <section className="jumbotron text-center">
        <div className="container">
          <h1 className="jumbotron-heading">Library Listing!</h1>
          <p className="lead text-muted">The best of young adult books. Young-adult books are books marketed to adolescents, roughly between the ages of 12 and 17, and usually feature main characters in that age range.
</p>
          <div>
            <Search handleChange={this.handleChange} searchTerm={this.state.searchTerm}></Search>
            <List books={filteredBooks}></List>
          </div>
        </div>
      </section>
        <div className="container">
          <div className="row text-center">
            {this.state.list.map((book,i) => {
              return <BookCard key={i}
                id={book._id}
                title={book.title}
                img={book.img}
                author={book.author}
                read={book.read}
                description={book.descripton}
              />;
            })}
          </div>
        </div>
      </div>

    );
  }
  handleChange(event) {
    this.setState({
      searchTerm: event.target.value,
      books: this.state.list
    });  
  }
}

export default BooksList;
