import PropTypes from 'prop-types';
import React, { Component } from 'react';
import {Button, Panel} from 'react-bootstrap';

class LoginBox extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  render() {
    const {loggedIn} = this.props;
    return (
      <Panel>
        <Button onClick={this.handleClick}>{loggedIn ? 'Logout' : 'Login'}</Button>
      </Panel>
    );
  }

  handleClick() {
    const {loggedIn, onLogin, onLogout} = this.props;
    if (loggedIn) {
      onLogout();
    } else {
      onLogin();
    }
  }
}

export default LoginBox;

LoginBox.propTypes = {
  loggedIn: PropTypes.bool.isRequired,
  onLogin: PropTypes.func.isRequired,
  onLogout: PropTypes.func.isRequired
};
