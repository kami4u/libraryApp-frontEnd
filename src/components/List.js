import React from 'react';

class List extends React.Component {
    render() {
        return (
            <div>
                    {this.props.books.map(function(book,i) {
                        console.log(book);
                        return (
                            <Item key={i} author={book.author} />
                        );
                    })}
            </div>
        );
    }
}

class Item extends React.Component {
    render () {
        return (
            <p>{this.props.author}</p>
        
        );
    }
}
export default List;