export default function(state = '', action) {
  switch (action.type) {
    case 'SET_FILTER':
      return action.value;
    default:
      return state;
  }
};
