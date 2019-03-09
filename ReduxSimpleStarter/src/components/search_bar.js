import React, {Component} from 'react';
// const Component = React.Component;

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {term: ''};
  }
  render() {
    return (
      <div className="search-bar">
      <input onChange={(event) => this.onInputChange(event.target.value)}/>
      </div>
    );
  }
  onInputChange(term) {
    this.setState({term});
    this.props.onVideoSearchChange(term);
  }
}

export default SearchBar;
