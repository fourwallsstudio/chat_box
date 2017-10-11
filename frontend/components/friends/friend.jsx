import React from 'react';
import { connect } from 'react-redux';
import { currentUserSelector } from 'reducers/selectors';
import {
  unfriend,
  makeFriendRequest,
  cancelFriendRequest,
  acceptFriendRequest
} from 'actions/friend_actions';

const friendStyle = {
  display: 'flex'
}

const Friend = (props) => {

  const handleUnfriend = (e) => {
    e.preventDefault();
    if (props.currentUser.friend_requests_made.includes(props.friend.id)) {
      props.unfriend({ user_id: props.currentUser.id, friend_id: props.friend.id })
    } else {
      props.unfriend({ user_id: props.friend.id, friend_id: props.currentUser.id })
    }
  }

  const handleMakeFriendRequest = (e) => {
    e.preventDefault();
    props.makeFriendRequest({ user_id: props.currentUser.id, friend_id: props.friend.id })
  }

  const handleCancelFriendRequest = (e) => {
    e.preventDefault();
    props.cancelFriendRequest({ user_id: props.currentUser.id, friend_id: props.friend.id })
  }

  const handleAceptFriendRequest = (e) => {
    e.preventDefault();
    props.acceptFriendRequest({ user_id: props.friend.id, friend_id: props.currentUser.id })
  }

  const handleDeclineFriendRequest = (e) => {
    e.preventDefault();
    props.cancelFriendRequest({ user_id: props.friend.id, friend_id: props.currentUser.id })
  }

  const renderButton = () => {
    if (props.currentUser.friend_ids.includes(props.friend.id)) {
      return <button className="unfriend-button" onClick={ handleUnfriend }>unfriend</button>;
    }

    if (props.currentUser.friend_requests_made.includes(props.friend.id)) {
      return <button className="cancel-friend-request-button" onClick={ handleCancelFriendRequest }>cancel friend request</button>;
    }

    if (props.currentUser.friend_requests_recieved.includes(props.friend.id)) {
      return <div>
        <button className="accept-friend-request-button" onClick={ handleAceptFriendRequest }>accept friend request</button>
        <button className="decline-friend-request-button" onClick={ handleDeclineFriendRequest }>decline friend request</button>
      </div>;
    }

    return <button className="friend-request-button" onClick={ handleMakeFriendRequest }>send friend request</button>;
  }

  return (
    <li style={friendStyle} >
      <p style={{ margin: 0 }} >{props.friend.email}</p>

      { renderButton() }
    </li>
  )
}

const mapStateToProps = (state) => {
  return {
    currentUser: currentUserSelector(state),
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    unfriend: (friendship) => dispatch(unfriend(friendship)),
    makeFriendRequest: (fr) => dispatch(makeFriendRequest(fr)),
    cancelFriendRequest: (fr) => dispatch(cancelFriendRequest(fr)),
    acceptFriendRequest: (fr) => dispatch(acceptFriendRequest(fr)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Friend);
