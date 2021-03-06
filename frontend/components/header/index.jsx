import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { displayFriendRequests } from 'actions/friend_actions';
import { logout, loginWithJWT } from 'actions/session_actions';
import { currentUserSelector } from 'reducers/selectors';
import FriendRequests from './friend_requests';

const headerStyle = { display: "flex", justifyContent: "space-between", alignItems: "baseline", padding: "0 30px" };
const userNameStyle = { display: "flex", alignItems: "baseline" };

class Header extends Component {
  constructor() {
    super()

    this.state = { requestsActive: false }
  }

  componentDidMount() {
    if (window.localStorage['jwt']) this.props.loginWithJWT();
  }

  handleDisplayFriendRequests = (e) => {
    e.preventDefault();
    this.setState({ requestsActive: !this.state.requestsActive })
  }

  handleLogout = (e) => {
    e.preventDefault()
    this.props.logout(this.props.currentUser);
  }

  render() {
    return (
      <header style={headerStyle}>
        <h2>chat_box</h2>

        {
          this.props.currentUser ? (
            <div className="current-user-nav" style={userNameStyle}>
              {
                this.state.requestsActive &&
                <FriendRequests friendRequests={this.props.currentUser.pending_friend_requests} />
              }
              <button
                onClick={ this.handleDisplayFriendRequests }
                >{ this.props.currentUser.pending_friend_requests.length }
              </button>
              <h2>{ this.props.currentUser.email }</h2>
              <button onClick={ this.handleLogout }>logout</button>
            </div>
          ) : (
            <div className="auth-links-container">
              <Link to="/login">login</Link>
              <Link to="/sign_up">sign_up</Link>
            </div>
          )
        }
      </header>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    currentUser: currentUserSelector(state),
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    loginWithJWT: () => dispatch(loginWithJWT()),
    logout: () => dispatch(logout()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
