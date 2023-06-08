import { useContext, useReducer } from "react";
import AuthContext from "./authContext";
import authReducer from "./authReducer";
import {
  IS_LOADED,
  GET_USER,
  LOAD_USER,
  UPDATE_SUCCESS,
  LOGOUT,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  AUTH_ERROR,
  CLEAR_ERRORS,
} from "../types";

const AuthState = (props) => {
  const initialState = {
    users: [
      {
        id: "13uyhfoiq37",
        regNumber: "IMC/BIT/2012777",
        username: "kelvn KD",
        fullName: "Kelvin D Mahundi",
        email: "kelvndavd86@gmail.com",
        course: "BSC in information technology",
        year: "3",
        stream: "Sys Dev",
        modules: [
          {
            id: "1YmIyTVdErYbG",
            title: "Fundamentals of blockchain",
            code: "ITU/CSU 08207",
            lecturer: "Qadry, S.F ",
          },
          {
            id: "2PoiuytTVdErYbG",
            title: "Social Networking",
            code: "ITU/CSU 08215",
            lecturer: "Omar, Z ",
          },
          {
            id: "3PoyTVd",
            title: "Information system auditing",
            code: "ITU 08211",
            lecturer: "Shiliba, G (Mr)",
          },
        ],
      },
      {
        id: "22WrTyBbj7",
        regNumber: "IMC/BIT/2012578",
        username: "cilyer",
        fullName: "Silya M Mayala",
        email: "kelvndavd86@gmail.com",
        course: "BSC in computer science",
        year: "3",
        stream: "Sys network",
        modules: [
          {
            id: "1YmIyTVdErYbG",
            title: "Fundamentals of blockchain",
            code: "ITU/CSU 08207",
            lecturer: "Qadry, S.F ",
          },
          {
            id: "2PoiuytTVdErYbG",
            title: "Social Networking",
            code: "ITU/CSU 08215",
            lecturer: "Omar, Z ",
          },
          {
            id: "3PoyTVd",
            title: "Information system auditing",
            code: "ITU 08211",
            lecturer: "Shiliba, G (Mr)",
          },
        ],
      },
    ],
    user: null,
    isLoaded: false,
    isAuthenticated: false,
    token: null,
    error: null,
  };

  const [state, dispatch] = useReducer(authReducer, initialState);
  // load a user
  const loadUser = async () => {
    const res = state.users.filter((user) => {
        return user.email === email && user.regNumber === username;
      });
      try {
        dispatch({ type: LOAD_USER, payload: res });
      } catch (error) {
        dispatch({type: AUTH_ERROR, payload: error.message});
      }
      
  };
  const login = async () => {
    try {
      dispatch({ type: LOGIN_SUCCESS, payload: {} });
      loadUser();
    } catch (error) {
      dispatch({ type: LOGIN_FAIL, payload: {} });
    }
  };
  // get a user after login
  const getUser = ( email, username ) => {
    const res = state.users.filter((user) => {
      return user.email === email && user.regNumber === username;
    });
    dispatch({ type: GET_USER, payload: res });
  };
  // logout
  const logout = () => {
    dispatch({ type: LOGOUT });
  };
  // update
  const updateUser = (username, profile, password) => {
    const res = state.users.filter((user) => {
      return user.regNumber === username;
    });

    const newUser = {
      ...res,
      username: username,
    };
    dispatch({ type: UPDATE_SUCCESS, payload: newUser });
  };

  const clearErrors = () => {
    dispatch({ type: CLEAR_ERRORS });
  };

  return <AuthContext.Provider value={{
    user: state.user,
    isAuthenticated: state.isAuthenticated,
    isLoaded: state.isLoaded,
    error: state.error,
    loadUser,
    login,
    logout,
    updateUser,
    getUser,
  }}>
    {props.children}
  </AuthContext.Provider>
};

export default AuthState;
