import React from 'react';

class Search extends React.Component {
    
    render () {
        return (
            <div>
                <input onChange={this.props.handleChange} value={this.props.str}></input>
            </div>
        );
    }   
}

export default Search;