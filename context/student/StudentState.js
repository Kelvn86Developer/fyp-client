import React, { useReducer } from "react";
import StudentContext from "./studentContext";
import studentReducer from "./studentReducer";

import { FILTER_VENUE, DAYS_FILTER, GET_FREE_VENUES } from "../types";

const StudentState = (props) => {
  const initialState = {
    venues: [
      {
        id: 1,
        status: "free",
        title: "100",
        time: "07:00 - 09:00 am",
        seats: "120",
      },
      {
        id: 2,
        status: "free",
        title: "120",
        time: "07:00 - 09:00 am",
        seats: "120",
      },
      {
        id: 3,
        status: "free",
        title: "110",
        time: "08:00 - 09:00 am",
        seats: "120",
      },
      {
        id: 4,
        status: "free",
        title: "119",
        time: "09:00 - 10:00 am",
        seats: "120",
      },
    ],
    currentVenue: {
      id: 1,
      title: "220",
      status: "Free",
      starts: "12:00",
      ends: "13:00",
      seats: "120",
    },
    freeTime: [
      {
        id: 1,
        time: "07:00 - 09:00",
      },
      {
        id: 2,
        time: "11:00 - 12:00",
      },
      {
        id: 3,
        time: "12:00 - 13:00",
      },
    ],
    notifications:[
      {
        id:1,
        title: "Class occupation",
        content: "Dr Mushi have occupied class 120 for Innovation management ITU 08761 BIT3",
        createdAt: "2023-05-23 12:34pm",
        time: "12:00 - 01:00"
      },
      {
         id:2,
        title: "Class occupation",
        content: "Dr Mushi have occupied class 120 for Innovation management ITU 08761 BIT3",
        createdAt: "2023-05-24 12:34pm",
        time: "1:00 - 03:00"
      }
    ]
  };

  const  [state, dispatch ] = useReducer(studentReducer, initialState);
  const getFreeVenues = async () => {
    dispatch({
      type: GET_FREE_VENUES,
   
    });
  };

  return (
    <StudentContext.Provider value={{ 
        venues: state.venues,
        notifications: state.notifications,
        freeTime: state.freeTime,
        getFreeVenues
         }}>
      {props.children}
    </StudentContext.Provider>
  );
};

export default StudentState;
