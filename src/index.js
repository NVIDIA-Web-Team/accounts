import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Profile from './Profile';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom'
import './index.css';

ReactDOM.render((
  <Router history={browserHistory}>
    <div>
      <Route exact path="/" component={App}/>
      <PrivateRoute path="/edit_profile" component={Profile} onEnter={requireAuth} />
    </div>
  </Router>
), document.getElementById('root'));
