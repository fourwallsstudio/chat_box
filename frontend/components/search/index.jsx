import React, { Component } from 'react';
import { connect } from 'react-redux';
import { searchFriends } from 'actions/search_actions';
import SearchResults from './search_results';

class Search extends Component {
  constructor(props) {
    super(props)

    this.state = { searchValue: "" }
  }

  handleSearch = (e) => {
    e.preventDefault();
    const searchValue = e.target.value;
    this.setState({ searchValue })
    this.props.searchFriends(searchValue);
  }

  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.searchValue}
          placeholder="search for new friends"
          onChange={this.handleSearch}
        />

        <SearchResults results={this.props.results} />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    results: state.search.results,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    searchFriends: search => dispatch(searchFriends(search)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Search);
