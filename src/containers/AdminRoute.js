import {connect} from 'react-redux';
import AdminRoute from '../components/AdminRoute';

export default connect(
  state => ({
    loggedIn: state.loggedIn
  })
)(AdminRoute);
