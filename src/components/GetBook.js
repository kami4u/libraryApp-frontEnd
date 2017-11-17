import React, { Component } from 'react';
import request from 'axios';
import {ROOT} from '../config';

// import '../css/BooksList.css';

class GetBook extends Component {
  constructor (props) {
    super(props);
    this.state = {
        book: []
    };
}
  componentDidMount () {
    request.get(`${ROOT}/books/${this.props.match.params.id}`)
        .then((res) => {
          console.log(res.data);
            this.setState({book: res.data});
        })
        .catch((error) => {console.log(error);});
}
  render() {
    return (
      <div className="container">
        <p>{this.state.book.descripton}</p>
      </div>
    );
  }
}

export default GetBook;
