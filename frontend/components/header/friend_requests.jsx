import React from 'react';
import Friend from 'components/friends/friend';

const FriendRequests = (props) => {

  const friendRequests = props.friendRequests.map((f) => {
    return <Friend key={`${f.id}-${f.email}`} friend={f} />;
  })

  return (
    <ul>
      { friendRequests }
    </ul>
  )
}

export default FriendRequests;
