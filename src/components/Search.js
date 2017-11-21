import React from 'react';

class Search extends React.Component {
    
    render () {
        return (
            <div>
                <input id='my' typt='text' onChange={this.props.handleChange} value={this.props.str}></input>
            </div>
        );
    }   
}

export default Search;