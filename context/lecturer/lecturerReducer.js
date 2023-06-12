import {
  GET_EXAMS,
  GET_OLDEST_NOTIFICATIONS,
  SET_CURRENT,
  SET_ACTIVE_DAY,
} from "../types";

export default (state, action)=> {
    switch(action.type){
        case SET_ACTIVE_DAY:
            return{
                ...state,
                sessionActiveDay: action.payload
            };
        case SET_CURRENT:
            return{
                ...state,
                Loading: true,
                currentSessions: state.sessions.filter(session=> session.day === action.payload),
                Loading: false
            };
        case GET_OLDEST_NOTIFICATIONS:
            return{
                ...state,
                Loading: true,
                totalNotifications: state.notifications.length,
                lastNotification: state.notifications[state.notifications.length - 1],
                // set last notification from to be in human readable format
                Loading: false
            };
        case GET_EXAMS:
            return{
                ...state,
                Loading: true,
                Loading: false
            };
        default:
            return state;
    }
}
