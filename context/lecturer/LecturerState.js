import React, { useContext, useReducer } from "react";
import {
  GET_NOTIFICATIONS,
  GET_OLDEST_NOTIFICATIONS,
  SET_CURRENT,
  SET_ACTIVE_DAY,
} from "../types";
import LecturerContext from "./lecturerContext";
import lecturerReducer from "./lecturerReducer";

// notifications
// info
// filtering sessions
// active day
// sessions

const LecturerState = (props) => {
  const initialState = {
    notifications: [
      {
        id: "11SeFt",
        content: "Dr Kwesigabo is requesting your room 200 at 09:00 to 11:00",
        status: "Active",
        title: "Room request",
        type: "inbox",
        time: "2023-05-23 09:00:23",
        from: "Dr Mushi, (Gr)"
      },
      {
        id: "22BgYU",
        content: "Dr Kwesigabo is requesting your room 200 at 09:00 to 11:00",
        status: "Expired",
        title: "Room request",
        type: "inbox",
        time: "2023-05-23 09:00:23",
        from: "Dr Kwesigabo, (Gr)"
      },
      {
        id: "33ginHYtRc",
        content: "Dr Kwesigabo is requesting your room 200 at 09:00 to 11:00",
        status: "Expired",
        title: "Room request",
        type: "inbox",
        time: "2023-05-23 09:00:23",
        from: "Dr Kwesigabo, (Gr)"
      },
    ],
    info: {
      lecturer: "Dr Mandali",
      title: "Change in group timetable semester two",
      department: "Computing and Mathematics",
      note: "The current timetable it only shows your sessions you have on different course on a particular day",
    },
    sessions: [
      {
        id: 1,
        module: "Social Networking",
        course: "BIT",
        venue: "200",
        starts: "07:00",
        ends: "09:00",
        code: "ITU 08112",
        seats: "120",
        status: "lecture",
        day: "Monday",
      },
      {
        id: 2,
        module: "Data communication",
        course: "DOIT 2",
        venue: "200",
        starts: "12:00",
        ends: "03:00",
        code: "ITU 08112",
        seats: "120",
        status: "lecture",
        day: "Monday",
      },
      {
        id: 3,
        module: "Social Networking",
        course: "BIT",
        venue: "200",
        starts: "07:00",
        ends: "09:00",
        code: "ITU 08112",
        seats: "120",
        status: "lecture",
        day: "Monday",
      },
      {
        id: 4,
        module: "Social Networking",
        course: "BIT",
        venue: "200",
        starts: "07:00",
        ends: "09:00",
        code: "ITU 08112",
        seats: "120",
        status: "lecture",
        day: "Tuesday",
      },
    ],
    lastNotification:null,
    currentSessions: null,
    totalNotifications: "",
    sessionActiveDay: "Monday",
    Loading: true,
    error: null,
  };

  const [state, dispatch] = useReducer(lecturerReducer, initialState);

  const setActiveFilter = (day)=> {
    dispatch({type:SET_ACTIVE_DAY, payload:day});
  }

  // get notifications
  // set current sessions
  const setCurrentSessions = (day)=> {
    dispatch({type:SET_CURRENT, payload:day});
  }
  // get recent notification and set total notifications
  const setRecentNotifications = ()=> {
    dispatch({type:GET_OLDEST_NOTIFICATIONS});
  }

  return <LecturerContext.Provider value={{
    notifications: state.notifications,
    lastNotification: state.lastNotification,
    info: state.info,
    sessions: state.sessions,
    currentSessions: state.currentSessions,
    sessionActiveDay: state.sessionActiveDay,
    Loading: state.Loading,
    totalNotifications: state.totalNotifications,
    error: state.error,
    setActiveFilter,
    setCurrentSessions,
    setRecentNotifications

  }}>
    {props.children}
  </LecturerContext.Provider>
};

export default LecturerState;
