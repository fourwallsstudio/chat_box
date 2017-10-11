import React, { Component } from 'react';
import { connect } from 'react-redux';
import { currentUserSelector, friendsSelector } from 'reducers/selectors';
import Search from 'components/search';
import Friend from './friend';

class Friends extends Component {

  render() {
    if (this.props.currentUser) {

      const friends = this.props.friends.map((f) => (
        <Friend key={`${f.id}-${f.email}`} friend={f} />
      ));

      return (
        <aside>
          <div className="friend-search-box">

          </div>
          <ul className="friend-list">
            { friends }
          </ul>
          <Search />
        </aside>
      )
    } else {
      return null;
    }
  }
}

const mapStateToProps = (state) => {
  return {
    currentUser: currentUserSelector(state),
    friends: friendsSelector(state),
  }
}

export default connect(mapStateToProps, null)(Friends);
