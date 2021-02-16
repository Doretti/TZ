import { connect } from 'react-redux';
import { Redirect, Route, Switch } from 'react-router-dom';
import './App.css';
import Login from './components/Login/Login';
import { checkAuth } from './redux/actions'
import React from 'react'
import Header from './components/Header/Header';
import SearchPage from './components/SearchPage/SearchPage';
import Favorites from './components/Favorites/Favorites';

const App = props => {

  props.checkAuth(localStorage.getItem('token'))

  return (
    <div>
      <Switch>
        <Route path='/login'>
          <Login />
          {props.auth ? <Redirect to='/'/> : null}
        </Route>
        <Route>
          {!props.auth ? <Redirect to='/login'/>: null}
          <Header />
          <Route exact path='/'>
            <SearchPage />
          </Route>
          <Route path='/favorites'>
            <Favorites />
          </Route>
        </Route>
      </Switch>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    auth: state.login.auth
  }
}

const mapDispatchToProps = {
  checkAuth
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
