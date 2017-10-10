import React, { Component } from 'react';
import { connect } from 'react-redux';
import { currentUserSelector, friendsSelector } from 'reducers/selectors';

class Friends extends Component {

  render() {
    if (this.props.currentUser) {
      
      const friends = this.props.friends.map((friend) => (
        <li key={`${friend.id}-${friend.email}`}>{friend.email}</li>
      ));

      return (
        <aside>
          <div className="friend-search-box">

          </div>
          <ul className="friend-list">
            { friends }
          </ul>
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
