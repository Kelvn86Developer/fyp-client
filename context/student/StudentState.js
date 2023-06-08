import React, { useReducer } from "react";
import StudentContext from "./studentContext";
import studentReducer from "./studentReducer";

import {
  GET_NOTIFICATIONS,
  GET_OLDEST_NOTIFICATIONS,
  FILTER_NOTIFICATIONS,
  GET_RECENT_NOTIFICATIONS,
  SET_ACTIVE_FILTER
} from "../types";

const StudentState = (props) => {
  const initialState = {
    notifications: [
      {
        id: 1,
        title: "Class occupation",
        content:
          "Dr Mushi have occupied class 120 for Innovation management ITU 08761 BIT3",
        createdAt: "2023-05-31 03:05",
        time: "12:00 - 01:00",
      },
      {
        id: 2,
        title: "Class occupation",
        content:
          "Dr Mushi have occupied class 120 for Innovation management ITU 08761 BIT3",
        createdAt: "2023-05-31 01:34",
        time: "1:00 - 03:00",
      },
      {
        id: 3,
        title: "New group timetable",
        content: "New group timetable for BIT3 has been uploaded",
        createdAt: "2023-05-25 01:34",
        time: "",
      },
      {
        id: 4,
        title: "Class occupation",
        content:
          "Dr Mushi have occupied class 120 for Innovation management ITU 08761 BIT3",
        createdAt: "2023-04-29 03:05",
        time: "12:00 - 01:00",
      },
      {
        id: 5,
        title: "Class occupation",
        content:
          "Dr Mushi have occupied class 120 for Innovation management ITU 08761 BIT3",
        createdAt: "2023-04-30 01:34",
        time: "1:00 - 03:00",
      },
      {
        id: 6,
        title: "New draft exam timetable",
        content:
          "New draft exam timetable for Final year exam has been uploaded",
        createdAt: "2023-06-04 08:16",
        time: "",
      },
    ],
    recent_notifications: [],
    oldest_notifications: [],
    isLoading: true,
    activeFilter: 'all'
  };

  const [state, dispatch] = useReducer(studentReducer, initialState);
  const setActiveFilter = (filter) => {
    dispatch({
      type: SET_ACTIVE_FILTER,
      payload: filter,
    });
  };
  // get all notifications that belongs to student course and year and stream
  const getNotifications = (course, year, stream)=> {
    
    dispatch({
      type: GET_NOTIFICATIONS,
    });
  }
  // fetch todays notifications based on student id
  const getRecentNotifications = () => {
    dispatch({
      type: GET_RECENT_NOTIFICATIONS,
      payload: state.notifications,
    });
  };
  // fetch oldest notifications based on student id
  const getOldestNotifications = () => {
    dispatch({
      type: GET_OLDEST_NOTIFICATIONS,
      payload: state.notifications,
    });
  };
  // filterNotifications based on date
  const filterNotifications = (date) => {
    dispatch({
      type: FILTER_NOTIFICATIONS,
      payload: date,
    });
  };
  return (
    <StudentContext.Provider
      value={{
        notifications: state.notifications,
        recent_notifications: state.recent_notifications,
        oldest_notifications: state.oldest_notifications,
        isLoading: state.isLoading,
        activeFilter: state.activeFilter,
        setActiveFilter,
        getNotifications,
        filterNotifications,
        getRecentNotifications,
        getOldestNotifications,
      }}
    >
      {props.children}
    </StudentContext.Provider>
  );
};

export default StudentState;
