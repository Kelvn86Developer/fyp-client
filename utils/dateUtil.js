// utils/dateUtils.js
import moment from 'moment';

export function formatDateToRelative(dateString) {
  const dateMoment = moment(dateString);
  const relativeTime = dateMoment.fromNow();
  return relativeTime;
}
