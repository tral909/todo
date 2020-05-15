import React, { Component } from 'react';

import './search-panel.css';

export default class SearchPanel extends Component {

  state = {
    searchStr: ''
  }

  onSearchChange = (e) => {
    const searchStr = e.target.value;
    this.setState({ searchStr });
    this.props.onSearch(searchStr);
  }

  render() {
    return (
      <input type="text"
        className="form-control search-input"
        placeholder="type to search"
        onChange={this.onSearchChange}
        value={this.state.searchStr} />
    );
  }
};
