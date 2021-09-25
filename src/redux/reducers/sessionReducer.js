import {LOGIN, LOGIN_SUCCESS, LOGIN_FAILURE} from '../../Constants';

export default (state = {loading: false, session: null}, {type, payload}) => {
  switch (type) {
    case LOGIN:
      return {...state, loading: true};
    case LOGIN_SUCCESS:
      return {...state, loading: false, session: payload.session};
    case LOGIN_FAILURE:
      return {...state, loading: false};
    default:
      return state;
  }
};
