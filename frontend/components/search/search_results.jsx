import React from 'react';

const SearchResults = (props) => {
  let searchResults;

  if (props.results) {
    searchResults = props.results.map( (u) => (
      <li key={`${u.id}-${u.email}`}>{u.email}</li>
    ))
  }

  return (
    <ul>
      { searchResults }
    </ul>
  )
};

export default SearchResults;
