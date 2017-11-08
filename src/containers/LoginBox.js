import {connect} from 'react-redux';
import {login, logout} from '../actions/loggedIn';
import LoginBox from '../components/LoginBox';

export default connect(
  state => ({
    loggedIn: state.loggedIn
  }),
  dispatch => ({
    onLogin: () => dispatch(login),
    onLogout: () => dispatch(logout)
  })
)(LoginBox);
