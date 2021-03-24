import React from 'react';

class SearchForm extends React.Component{
    state = { username : "" };

    // send http request:
    // fetch(url)
    // .then(response => response.json())
    // .then(data => doSomethingWithData(data));

    handleSubmit = (event) => {
        // Prevent refresh
        event.preventDefault();
        fetch(`https://api.github.com/users/${this.state.username}`)
        .then(response => response.json())
        .then(data => this.props.onSubmit(data));
        
        this.setState( {username : "" });
    };
    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <input 
                type="text"
                value={this.state.username}
                onChange={event => this.setState({ username : event.target.value})} 
                placeholder="Username" 
                ref={this.usernameInput} 
                required/>
                <button>Add</button>
            </form>
        )
    }
}

export default SearchForm;