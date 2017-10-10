import React from 'react';
import { connect } from 'react-redux';
import { currentUserSelector } from 'reducers/selectors';
import { Link } from 'react-router-dom';

const headerStyle = { display: "flex", justifyContent: "space-between", padding: "0 30px" }

const Header = (props) => {
  return (
    <header style={headerStyle}>
        <h2>chat_box</h2>

        {
          props.currentUser ? (
            <div className="current-user-nav">
              <h2>{ props.currentUser.email }</h2>
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

const mapStateToProps = (state) => {
  return {
    currentUser: currentUserSelector(state),
  }
}

export default connect(mapStateToProps, null)(Header);
