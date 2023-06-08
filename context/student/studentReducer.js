import {
  GET_OLDEST_NOTIFICATIONS,
  GET_NOTIFICATIONS,
  FILTER_NOTIFICATIONS,
  GET_RECENT_NOTIFICATIONS,
  SET_ACTIVE_FILTER,
} from "../types";

export default (state, action) => {
  switch (action.type) {
    case SET_ACTIVE_FILTER:
      return {
        ...state,
        activeFilter: action.payload,
      };
    case GET_RECENT_NOTIFICATIONS:
      return {
        ...state,
        isLoading: true,
        recent_notifications: action.payload.filter((notification) => {
          const today = new Date();
          const notificationDate = new Date(notification.createdAt);
          return notificationDate.getDate() === today.getDate();
        }),
        isLoading: false,
      };
    case GET_OLDEST_NOTIFICATIONS:
      return {
        ...state,
        oldest_notifications: action.payload.filter((notification) => {
          const today = new Date();
          const notificationDate = new Date(notification.createdAt);
          // console.log({today, notificationDate})
          return notificationDate.getDate() !== today.getDate();
        }),
        isLoading: false,
      };
    case FILTER_NOTIFICATIONS:
      if (action.payload === "today") {
        return {
          ...state,
          recent_notifications: state.notifications.filter((notification) => {
            const today = new Date();
            const notificationDate = new Date(notification.createdAt);
            const currentHours = today.getHours();
            const notificationHours = notificationDate.getHours();
            return currentHours === notificationHours;
          }),
          oldest_notifications: state.notifications.filter((notification) => {
            const today = new Date();
            const notificationDate = new Date(notification.createdAt);
            const currentHours = today.getHours();
            const notificationHours = notificationDate.getHours();
            return (
              currentHours !== notificationHours &&
              notificationDate.getDate() === today.getDate()
            );
          }),
        };
      }
      return {
        ...state,
        oldest_notifications: state.notifications.filter((notification) => {
          const today = new Date();
          const notificationDate = new Date(notification.createdAt);
          return notificationDate.getDate() !== today.getDate();
        }),
        recent_notifications: state.notifications.filter((notification) => {
          const today = new Date();
          const notificationDate = new Date(notification.createdAt);
          return notificationDate.getDate() === today.getDate();
        }),
        isLoading: false,
      };

    default:
      return state;
  }
};
