import React, { Component } from 'react';
import request from 'axios';
import {ROOT} from '../config';

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
            this.setState({book: res.data});
        })
        .catch((error) => {console.log(error);});
}
  render() {
    return (
      <div className="container single">
        <Book
                title={this.state.book.title}
                img={this.state.book.img}
                author={this.state.book.author}
                read={this.state.book.read}
                description={this.state.book.descripton}
              />
      </div>
    );
  }
}
class Book extends Component {
  
render() {
  return (
    <div>
        
          <div className="card">
            <img src={this.props.img} height="300" width="200" alt="Card image caption" />
            <p>Author:  {this.props.author}</p>
            <p>Title:  {this.props.title}</p>
            <p>Read:  {this.props.read}</p>
            <p className="card-text">{this.props.description}</p>
          </div>
    
    </div>
    
  );
}
}

export default GetBook;
