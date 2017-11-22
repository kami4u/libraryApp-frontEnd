import React from 'react';
import {NavLink} from 'react-router-dom';

class List extends React.Component {
    render() {
        return (
            <div>
                    {this.props.books.map(function(book,i) {
                        return (
                            <Item key={i} title={book.title} author={book.author} id={book._id} />
                        );
                    })}
            </div>
        );
    }
}

class Item extends React.Component {
    render () {
        return (
            <NavLink to={`/books/${this.props.id}`}>
                <p>title:{this.props.title} author:{this.props.author}</p>
            </NavLink>        
        );
    }
}
export default List;