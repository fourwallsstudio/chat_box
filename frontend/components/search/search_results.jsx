import React from 'react';
import Friend from 'components/friends/friend';

const SearchResults = (props) => {
  let searchResults;

  if (props.results) {
    searchResults = props.results.map( (f) => (
      <Friend key={`${f.id}-${f.email}`} friend={f} />
    ))
  }

  return (
    <ul>
      { searchResults }
    </ul>
  )
};

export default SearchResults;
