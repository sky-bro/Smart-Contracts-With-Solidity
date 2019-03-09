import React, {Component} from 'react';
// const Component = React.Component;

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {term: ''};
  }
  render() {
    return (
      <div>
      <input onChange={event => this.setState({term: event.target.value})}/>
      value of the input: {this.state.term}
      </div>
    );
  }
}

export default SearchBar;
