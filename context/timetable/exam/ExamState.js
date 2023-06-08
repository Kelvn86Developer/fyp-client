import React, { useReducer } from "react";
import {
  GET_EXAMS,
  SET_CURRENT_EXAMS,
  SET_ERRORS,
  SET_LOADING,
  SET_ACTIVE_DAY,
} from "../../types";
import ExamContext from "./examContext";
import examReducer from "./examReducer";

const ExamState = (props) => {
  const initialState = {
    exams: [
      {
        id: "u89ne",
        date: "24 june 2023",
        day: "Saturday",
        time: "09:00 AM - 12:00 PM",
        prog: "BIT",
        year: "1",
        code: "ITU_07208",
        module: "Database Systems management",
        venue: "120",
        stream: "Main"
      },
      {
        id: "12AbVInGrYIjb",
        date: "24 june 2023",
        day: "Saturday",
        time: "03:00 PM - 06:00 PM",
        prog: "BIT",
        year: "1",
        code: "ITU_07208",
        module: "Web database applications",
        venue: "220",
        stream: "Main"
      },
      {
        id: "3SDcTYNIoPPo",
        date: "26 june 2023",
        day: "Monday",
        time: "09:00 AM - 12:00 PM",
        prog: "BIT",
        year: "1",
        code: "ITU_07209",
        module: "Data Communications",
        venue: "320",
        stream: "Main"
      }
    ],
    currentExams: [],
    error: [],
    ExamActiveDay: "",
    isLoading: true,
  };

  const [state, dispatch] = useReducer(examReducer, initialState);

  const setIsLoading = ()=> {
    dispatch({type:SET_LOADING});
  }

  // GET ALL EXAMS 
  const getExams = ()=> {
    dispatch({type:GET_EXAMS});
  }

  // SET CURRENT EXAMS TIMETABLE
  const setCurrentExams = (day)=>{
    console.log(day);
    dispatch({type:SET_CURRENT_EXAMS, payload:day});
  }
  // SET ACTIVE DAY
  const setExamActiveDay = (day) => {
    dispatch({ type: SET_ACTIVE_DAY, payload: day });
  };
  return <ExamContext.Provider value={{
      exams:state.exams,
      currentExams:state.currentExams,
      examActiveDay:state.examActiveDay,
      isLoading: state.isLoading,
      getExams,
      setCurrentExams,
      setExamActiveDay,
      setIsLoading

  }}>
       {props.children}
  </ExamContext.Provider>;
};

export default ExamState;
