import {
  IS_LOADED,
  GET_USER,
  LOAD_USER,
  CLEAR_ERRORS,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  UPDATE_SUCCESS,
  LOGIN_FAIL,
} from "../types";

export default (action, state) => {
  switch (action.type) {
    case LOAD_USER:
      return {
        ...state,
        isAuthenticated: true,
        isLoaded: true,
        user: action.payload
      };
    case LOGIN_SUCCESS:
        return {
            ...state,
            isAuthenticated:true,
            isLoaded: true,

        };
    case UPDATE_SUCCESS:
        return {
            ...state,
            isAuthenticated: true,
            isLoaded: true,
            user: action.payload
        };
    case GET_USER:
      return {
        ...state,
        user: {...action.payload[0]},
        isLoaded: true,
        isAuthenticated: true,
      };
    case AUTH_ERROR:
      return {
        ...state,
        user: null,
        isLoaded: false,
        isAuthenticated: false,
        error: action.payload,
        token: null,
      };
    case LOGIN_FAIL:
      return {
        ...state,
        token: null,
        user: null,
        error: action.payload,
        isAuthenticated: false,
        isLoaded: false,
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};
