import { GET_GROUPS, SET_CURRENT_GROUPS, SET_ERRORS, SET_LOADING, SET_ACTIVE_DAY } from "../../types";

export default (state, action) => {
  switch (action.type) {
    case SET_LOADING:
      return {
        ...state,
        isLoading: false,
      };
    case SET_ACTIVE_DAY:
      return {
        ...state,
        activeDay: action.payload,
      };
    case GET_GROUPS:
      return {
        ...state,
        isLoading: true,
      };
    case SET_CURRENT_GROUPS:
      return {
        ...state,
        current: state.groups.filter((group) => {
          const regex = new RegExp(`${action.payload}`, "gi");
          return group.day.match(regex);
        }),
        isLoading: false
      };
    case SET_ERRORS:
      return {
        ...state,
        errors: action.payload,
      };
    default:
      return state;
  }
};
