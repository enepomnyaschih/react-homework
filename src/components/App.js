import React from 'react';
import {Nav, NavItem, Navbar} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';
import {BrowserRouter as Router, Link, Redirect, Route, Switch} from 'react-router-dom';
import AdminRoute from '../containers/AdminRoute';
import Admin from './Admin';
import Main from './Main';

function App({loggedIn}) {
  return (
    <Router>
      <div>
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              <Link to="/">Homework app</Link>
            </Navbar.Brand>
          </Navbar.Header>
          <Nav>
            <LinkContainer to="/main"><NavItem>Main</NavItem></LinkContainer>
            {loggedIn && <LinkContainer to="/admin"><NavItem>Admin</NavItem></LinkContainer>}
          </Nav>
        </Navbar>
        <Switch>
          <Route exact path="/" render={() => <Redirect to="/main"/>}/>
          <Route path="/main" component={Main}/>
          <AdminRoute path="/admin" component={Admin}/>
          <Route path="*" render={() => <div>Not Found</div>}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

App.propTypes = {};
