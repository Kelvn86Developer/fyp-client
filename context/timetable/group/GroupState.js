import React, { useReducer } from "react";
import {
  GET_GROUPS,
  SET_CURRENT_GROUPS,
  SET_ERRORS,
  SET_LOADING,
  SET_ACTIVE_DAY,
} from "../../types";
import GroupContext from "./groupContext";
import groupReducer from "./groupReducer";

const GroupState = (props) => {
  const initialState = {
    groups: [
      {
        id: 1202838,
        title: "Lecture",
        code: "ITU/CSU_08207",
        room: "213",
        lecturer: "Qadry, S.F",
        day: "Thursday",
        starts: "09:00",
        ends: "11:00",
        stream: "BIT_3SysAdmin",
      },
      {
        id: 2020202,
        title: "Tutorial",
        code: "ITU/CSU_08217",
        lecturer: "Rutaigwa",
        room: "TH_J",
        day: "Thursday",
        starts: "03:00",
        ends: "04:00",
        stream: "BIT_3SysAdmin",
      },
      {
        id: 3398476,
        title: "Lecture",
        code: "ITU_08211",
        lecturer: "Shiliba, G (Mr)",
        room: "TH_F",
        day: "Thursday",
        starts: "11:00",
        ends: "01:00",
        stream: "BIT_3SysAdmin",
      },
      {
        id: "33dio98476",
        title: "Lecture",
        code: "ITU_08211",
        lecturer: "Kwesigabo, G (Mr)",
        room: "TH_F",
        day: "Monday",
        starts: "11:00",
        ends: "01:00",
        stream: "BIT_3SysAdmin",
      },
    ],
    current: [],
    error: [],
    activeDay: "Monday",
    isLoading: true,
  };

  const [state, dispatch] = useReducer(groupReducer, initialState);
  // GET METHOD FOR FETCHING GROUP TIMETABLE FOR STUDENT BELONGING TO THE SPECIFIC COURSE AND POPULATE GROUPS VARIABLE
  const setActiveDay = (day) => {
    dispatch({ type: SET_ACTIVE_DAY, payload: day });
  };
  const setIsLoading = () => {
    dispatch({ type: SET_LOADING });
  };
  const getGroups = () => {
    dispatch({ type: GET_GROUPS });
  };

  const setCurrentGroups = (day) => {
    dispatch({ type: SET_CURRENT_GROUPS, payload: day });
  };

  return (
    <GroupContext.Provider
      value={{
        groups: state.groups,
        current: state.current,
        error: state.error,
        isLoading: state.isLoading,
        activeDay: state.activeDay,
        setActiveDay,
        getGroups,
        setCurrentGroups,
        setIsLoading,
      }}
    >
      {props.children}
    </GroupContext.Provider>
  );
};
export default GroupState;
