import React from 'react';
import { Route } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import SessionModal from 'components/session_modal';
import Header from 'components/header';
import Friends from 'components/friends';

const App = () => {
  return (
    <section>
      <Header />
      <Friends />
      <AuthRoute path="/login" component={SessionModal} />
      <AuthRoute path="/sign_up" component={SessionModal} />
    </section>
  )
}

export default App;
