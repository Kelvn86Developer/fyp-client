import React, { useReducer } from "react";
import VenuesContext from "./venuesContext";
import venuesReducer from "./venuesReducer";
import {
  GET_EXAMS,
  GET_FREE_VENUES,
  SEARCH_VENUES,
  SET_CURRENT,
  GET_GROUPS,
  GET_NOTIFICATIONS,
  GET_SIMILAR_ROOMS,
  FILTER_VENUES,
  GET_FREE_VENUE_SESSIONS,
  OCCUPY_VENUE,
  SET_LOADING,
  SET_ACTIVE_DAY,
  SCHEDULE_FREEING_VENUE,
  SET_SHOW_MODEL,
  SET_SELECTED_VENUE,
} from "../types";

const VenuesState = (props) => {
  const initialState = {
    venues: [
      {
        id: 1,
        status: "Free",
        title: "100",
        time: "07:00 - 09:00 am",
        starts: "07:00 am",
        projector: "YES",
        ends: "09:00 am",
        seats: "120",
        range: "100 - 120",
        floor: "1",
        day: "Tuesday",
      },
      {
        id: 2,
        status: "Free",
        title: "TH-A",
        time: "07:00 - 09:00 am",
        seats: "120",
        range: "TH A - TH B",
        projector: "YES",
        floor: "3",
        day: "Monday",
        starts: "07:00 am",
        ends: "09:00 am",
      },
      {
        id: 3,
        status: "Free",
        title: "210",
        time: "08:00 - 09:00 am",
        seats: "120",
        range: "200 - 220",
        projector: "No",
        floor: "2",
        day: "Monday",
        starts: "08:00 am",
        ends: "09:00 am",

      },
      {
        id: 4,
        status: "Free",
        title: "319",
        time: "09:00 - 10:00 am",
        seats: "120",
        range: "300 - 320",
        projector: "YES",
        floor: "3",
        day: "Wednesday",
        starts: "09:00 am",
        ends: "10:00 am",

      },
      {
        id: 5,
        status: "Free",
        title: "200",
        time: "09:00 - 10:00 am",
        seats: "120",
        range: "200 - 220",
        projector: "YES",
        floor: "2",
        day: "Thursday",
        starts: "09:00 am",
        ends: "05:03 pm",

      },
      {
        id: 6,
        status: "Free",
        title: "102",
        time: "10:00 - 11:00 am",
        seats: "120",
        range: "100 - 120",
        projector: "YES",
        floor: "1",
        day: "Friday",
        starts: "10:00 am",
        ends: "11:00 am",
      },
      {
        id: 7,
        status: "Free",
        title: "TH-B",
        time: "10:00 - 11:00 am",
        seats: "120",
        range: "TH A - TH B",
        projector: "YES",
        floor: "3",
        day: "Thursday",
        starts: "11:00 am",
        ends: "07:10 pm",
      },
      {
        id: 8,
        status: "Free",
        title: "120",
        time: "11:00 - 12:00 pm",
        seats: "120",
        range: "100 - 120",
        projector: "YES",
        floor: "1",
        day: "Monday",
        starts: "11:00 am",
        ends: "12:00 pm",
      },
    ],
    sessionsAll: [
      {
        venue: "100",
        starts: "07:00 am",
        ends: "09:00 am",
        day: "monday",
      },
      {
        venue: "100",
        starts: "11:00 am",
        ends: "12:00 pm",
        day: "monday",
      },
      {
        venue: "100",
        starts: "07:00 pm",
        ends: "09:00 pm",
        day: "tuesday",
      },
      {
        venue: "200",
        starts: "07:00 am",
        ends: "09:00 am",
      },
      {
        venue: "200",
        starts: "06:00 pm",
        ends: "07:00 pm",
      },
    ],
    sessions: [],
    similarVenues: [],
    current: [],
    lecturerFreeVenues:null,
    filtered: [],
    occupiedVenues: [], 
    selectedVenue:[],
    activeDay: "Monday",
    loading: true,
    loaded:false,
    showModel:false,
  };

  const [state, dispatch] = useReducer(venuesReducer, initialState);

  const setSelectedVenue = (venue)=> {
    dispatch({type: SET_SELECTED_VENUE, payload: {venue}});
  }
  const setShowModel = (action="open")=> {
    dispatch({type: SET_SHOW_MODEL, payload: action});
  }
  const setActiveDay = (day) => {
    dispatch({ type: SET_ACTIVE_DAY, payload: day });
  };
  // SET LOADING TO TRUE
  const setLoading = () => {
    dispatch({ type: SET_LOADING });
  };
  // GET THE CURRENT VENUE FROM ROUTER ID
  const setCurrent = (venue) => {
    setLoading();
    dispatch({ type: SET_CURRENT, payload: venue });
  };
  // SET LECTURERS FREE VENUES
  const setLecturerFreeVenues = (day="Monday", type="lecturer")=> {
      dispatch({type: SET_CURRENT, payload: {day, type}});
  }
  // GET ALL FREE VENUES FOR STUDENT
  const getFreeVenues = async () => {
    dispatch({
      type: GET_FREE_VENUES,
      payload: state.venues,
    });
  };
  // GET ALL SESSIONS FOR A SINGLE CLASSROOM
  const getFreeVenueSessions = (venue, day) => {
    dispatch({ type: GET_FREE_VENUE_SESSIONS, payload: { venue, day } });
  };
  // GET SIMILAR VENUES THAT BELONGS TO SAME FLOOR AS THE CURRENT VENUE
  const getSimilarVenues = (venue) => {
    dispatch({ type: GET_SIMILAR_ROOMS, payload: venue });
  };
  // FILTER VENUES
  const filterVenues = (range) => {
    dispatch({ type: FILTER_VENUES, payload: range });
  };
  // SEARCH VENUES
  const searchVenues = (params) => {
    dispatch({ type: SEARCH_VENUES, payload: params });
  };
  // OCCUPY VENUE AND UPDATE THE VENUES LIST
  const occupyFreeVenue = (venue,day)=> {
    dispatch({type: OCCUPY_VENUE, payload:{ venue, day}})
  }

  // SCHEDULE FREEING OF VENUES
  const scheduleFreeingVenues = (venue, timeout)=> {
    console.log(timeout);
     setTimeout(()=>{
        dispatch({type: SCHEDULE_FREEING_VENUE, payload: {venue}});
     }, timeout);
  }

  return (
    <VenuesContext.Provider
      value={{
        venues: state.venues,
        filtered: state.filtered,
        current: state.current,
        sessions: state.sessions,
        similarVenues: state.similarVenues,
        loading: state.loading,
        loaded: state.loaded,
        activeDay: state.activeDay,
        occupiedVenues: state.occupiedVenues,
        showModel: state.showModel,
        lecturerFreeVenues: state.lecturerFreeVenues,
        selectedVenue: state.selectedVenue,
        scheduleFreeingVenues,
        setActiveDay,
        setShowModel,
        getFreeVenues,
        filterVenues,
        searchVenues,
        getFreeVenueSessions,
        setCurrent,
        getSimilarVenues,
        setLecturerFreeVenues,
        occupyFreeVenue,
        setSelectedVenue
      }}
    >
      {props.children}
    </VenuesContext.Provider>
  );
};

export default VenuesState;
