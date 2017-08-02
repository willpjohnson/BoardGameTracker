import React from 'react';
import { Route, withRouter } from 'react-router-dom';
import SessionForm from './session_form';
import Navbar from './navbar';
import UserShow from './user_show';

import CatanGame from './games_show/catan';

const authForm = (query) => {
  if (query === "?login=true") {
    return(<SessionForm formType="login"/>);
  } else if (query === "?signup=true") {
    return(<SessionForm formType="signup"/>);
  } else {
    return null;
  }
}

const App = (props) => (
  <div>
    {authForm(props.location.search)}
    <Navbar />
    <Route exact path="/users/:id" component={UserShow}/>

    <Route path="/catan_games/:id" component={CatanGame}/>
  </div>
);

export default withRouter(App);
