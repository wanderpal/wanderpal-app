export default (state = null, {type, payload}) => {
  const token = payload;
  switch(type) {
    case 'TOKEN_SET':
      return token;
    case 'TOKEN_REMOVE':
      return null;
    default:
      return state;
  }
};
