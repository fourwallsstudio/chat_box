import React from 'react';
import { Route } from 'react-router-dom';
import SessionModal from 'components/session_modal';

const App = () => {
  return (
    <section>
      <Route exact path="/login" component={SessionModal} />
      <Route exact path="/sign_up" component={SessionModal} />
    </section>
  )
}

export default App;
