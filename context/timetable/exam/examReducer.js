import {
  GET_EXAMS,
  SET_CURRENT_EXAMS,
  SET_ERRORS,
  SET_LOADING,
  SET_ACTIVE_DAY,
} from "../../types";

export default (state, action) => {
  switch (action.type) {
    case SET_ACTIVE_DAY:
      return {
        ...state,
        examActiveDay: action.payload,
      };
    case GET_EXAMS:
      return {
        ...state,
        isLoading: false,
      };
    case SET_CURRENT_EXAMS:
      return {
        ...state,
        isLoading: true,
        currentExams: state.exams.filter((exam) => {
          const regex = new RegExp(`${action.payload}`, "gi");
          return exam.day.match(regex);
        }),
        isLoading: false,
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
