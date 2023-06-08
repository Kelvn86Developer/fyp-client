import React, { useContext } from 'react'
import venuesContext from '../context/venues/venuesContext';
import groupsContext from '../context/timetable/group/groupContext';
import examsContext from '../context/timetable/exam/examContext';
const DaysFilter = ({ day, venueId, type }) => {
  const VenuesContext = useContext(venuesContext);
  const GroupsContext = useContext(groupsContext);
  const ExamsContext = useContext(examsContext);
  const { getFreeVenueSessions } = VenuesContext;
  const { setCurrentGroups, activeDay, setActiveDay } = GroupsContext;
  const { setCurrentExams, examActiveDay, setExamActiveDay } = ExamsContext;

  const onClick = (e) => {
    if (type === "exams") {
      setExamActiveDay(day.name);
      setCurrentExams(day.name);

    } else if (type === "venues") {
      setActiveDay(day.name);
      getFreeVenueSessions(venueId, day.name);

    }
    else if (type === "groups") {
      setActiveDay(day.name);
      setCurrentGroups(day.name);
    }
  }
  if (type === "exams") {
    return (
      <button type='button' className={`day-filter active:text-main-400 focus:text-main-400 hover:text-main-400 focus:underline  text-center text-xl uppercase focus:font-semibold focus:underline-offset-8 ${examActiveDay == day.name ? 'text-main-400 underline font-semibold' : 'text-slate-400'}`} key={day.id + day.date} id={day.name} onClick={onClick}>
        <p>{day.name} {day.date}</p>
      </button>
    )

  } else {
    return (
      <button type='button' className={`day-filter active:text-main-400 focus:text-main-400 hover:text-main-400 focus:underline  text-center text-2xl uppercase focus:font-semibold focus:underline-offset-8 ${activeDay == day.name ? 'text-main-400 underline font-semibold' : 'text-slate-400'}`} key={day.id + day.date} id={day.name} onClick={onClick}>
        <p>{day.name} {day.date}</p>
      </button>
    )
  }

}


export default DaysFilter