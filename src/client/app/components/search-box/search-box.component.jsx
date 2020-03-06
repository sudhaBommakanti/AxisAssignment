import React, { Component } from 'react';
import { Input } from 'semantic-ui-react';
import './search-box.styles.css';

class SearchBox extends Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  }
  
  render() {
    return (
      <Input className="search" type='search'
        placeholder={this.props.placeholder}
        value={this.props.search}
        onChange={this.props.handleChange}
      />
    );
  }
}

SearchBox.defaultProps = {
  search: '',
  handleChange: () => { },
};

export default SearchBox;