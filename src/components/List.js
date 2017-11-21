import React from 'react';
import {NavLink} from 'react-router-dom';

class List extends React.Component {
    render() {
        return (
            <div>
                    {this.props.books.map(function(book,i) {
                        console.log(book);
                        return (
                            <Item key={i} title={book.title} id={book._id} />
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
                <p>{this.props.title}</p>
            </NavLink>        
        );
    }
}
export default List;