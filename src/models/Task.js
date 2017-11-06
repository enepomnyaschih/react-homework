import PropTypes from 'prop-types';
import {compare} from '../Utils';

let id = 0;

export default {
  propTypes: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    duration: PropTypes.number.isRequired
  }),
  compare: (x, y) => compare(x.duration, y.duration),
  create: (props) => ({
    ...props,
    id: props.id || ++id
  })
};
