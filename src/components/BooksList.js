import React, { Component } from 'react';
import request from 'axios';
import {ROOT} from '../config';
// import '../css/BooksList.css';

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
      <div>
          {this.state.list.map((book,i) =>
                <p key={i}>{book.title}{book.genre}{book.author}{book.read}</p>
        )}
   
      </div>
    );
  }
}

export default BooksList;
