import {
  GET_EXAMS,
  GET_FREE_VENUES,
  SEARCH_VENUES,
  GET_GROUPS,
  GET_NOTIFICATIONS,
  GET_SIMILAR_ROOMS,
  FILTER_VENUES,
  GET_FREE_VENUE_SESSIONS,
  OCCUPY_VENUE,
  SET_CURRENT,
  SET_LOADING,
  SET_ACTIVE_DAY,
  SCHEDULE_FREEING_VENUE,
} from "../types";
export default (state, action) => {
  switch (action.type) {
    case SET_LOADING:
      return {
        ...state,
        loading: false,
      };
    case SET_ACTIVE_DAY:
      return {
        ...state,
        activeDay: action.payload,
      };
    case SET_CURRENT:
      if (
        action.payload.type !== "lecturer" ||
        action.payload.type === undefined
      ) {
        return {
          ...state,
          current: state.venues.filter(
            (venue) => venue.title === action.payload && venue.status === "Free"
          ),
          loading: false,
        };
      }
      return {
        ...state,
        lecturerFreeVenues: state.venues.filter(
          (venue) => venue.day === action.payload.day && venue.status === "Free"
        ),
        loaded: true,
      };

    case GET_FREE_VENUES:
      return {
        ...state,
        loading: false,
      };
    case OCCUPY_VENUE:
        return {
            ...state,
            loading: true,
            loaded: false,
            venues: [...state.venues, state.venues.map((venue)=> {
                if(venue.title === action.payload.venue.title) {
                    venue.status = "Occupied"
                }
                return venue
            })
            ],
            current: state.venues.filter((venue)=> venue.title !== action.payload.venue.title && venue.status === "Free" && venue.day === action.payload.day),
            lecturerFreeVenues: state.venues.filter((venue)=> venue.title !== action.payload.venue.title && venue.status === "Free" && venue.day === action.payload.day),
            occupiedVenues: [...state.occupiedVenues, action.payload.venue],
            loading: false,
            loaded: true

        }; 
    case SCHEDULE_FREEING_VENUE:
        return {
            ...state,
            venues: [...state.venues, state.venues.map((venue)=> {
              if(venue.title === action.payload.venue.title && venue.day === action.payload.day && venue.status === "Occupied") {
                const timeToFree = new Date(venue.ends);
                if (action.payload.currentTime >= timeToFree) {
                  venue.status = "Free";
                }
              }
              return venue
          })
          ],
          occupiedVenues: [...state.occupiedVenues, state.occupiedVenues.map((venue)=> {
            if(venue.title === action.payload.venue.title && venue.day === action.payload.day && venue.status === "Occupied") {
              const timeToFree = new Date(venue.ends);
              if (action.payload.currentTime >= timeToFree) {
                venue.status = "Free";
              }
            }
            return venue
          })
          ],
        };
    case GET_FREE_VENUE_SESSIONS:
      return {
        ...state,
        sessions: state.sessionsAll.filter((session) => {
          const regex = new RegExp(`${action.payload.day}`, "gi");
          return (
            session.venue == action.payload.venue && session.day.match(regex)
          );
        }),
        loading: false,
      };
    case GET_SIMILAR_ROOMS:
      return {
        ...state,
        similarVenues: state.venues.filter(
          (venue) =>
            venue.range == action.payload.range &&
            venue.title != action.payload.title
        ),
        // loading: false
      };
    case FILTER_VENUES:
      return {
        ...state,
        filtered: state.venues.filter((venue) => venue.range == action.payload),
        // loading: false
      };
    case SEARCH_VENUES:
      return {
        ...state,
        filtered: state.venues.filter((venue) => {
          const regex = new RegExp(`${action.payload}`, "gi");
          return venue.title.match(regex) || venue.range.match(regex);
        }),
        loading: false,
      };
    default:
      return state;
  }
};
