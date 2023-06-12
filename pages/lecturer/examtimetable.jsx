import React, {useEffect, useContext} from 'react'
import LecturerContext from '../../context/lecturer/lecturerContext'
import InfoCard from '../../components/lecturer/InfoCard';
import Loader from '../../components/Loader';
import DaysFilter from '../../components/lecturer/DaysFilter';
import Alert from '../../components/Alert';
import ExamCard from '../../components/lecturer/ExamCard';

const examTimetable = ({days}) => {
  const lecturerContext = useContext(LecturerContext);
  const {setCurrentSessions, setRecentNotifications, sessionActiveDay, Loading, currentSessions,  info, exams} = lecturerContext;

  useEffect(() => {
    setCurrentSessions(sessionActiveDay);
    setRecentNotifications();
  },[sessionActiveDay]);
  
  const todayExams = exams.filter(exam => exam.day === sessionActiveDay);
  if(Loading || currentSessions === null){
    return <Loader/>
  }
  return (
    <div>
      <div className="cards-wrapper w-[96%] flex justify-between">
            <InfoCard info={info}/>
            <ExamCard/>
      </div>
      <div className="lectures-days-filter flex gap-6 w-[96%] mt-12">
        {days.map((day) => (<DaysFilter type='exams' day={day} key={day.name + day.id} />))}
      </div>

      <div className={`exams-wrapper mt-4 w-[96%] bg-main-130 rounded px-2 min-h-[40vh] ${todayExams.length} == 0 ? "flex flex-col items-center justify-center": "  grid grid-cols-3 gap-4"`}>
         {Loading ? <Loader/> : todayExams.length == 0 ? <Alert message="No exams to invigilate today,"/> : todayExams.map(exam => (
          <div className='-mt-12 relative flex flex-col space-y-2 '>
              <span>{exam.module}</span>
              <span>{exam.code}</span>
              <span>{exam.course}</span>
              <span>{exam.venue}</span>
              <p className='text-[13px] font-semibold flex gap-2'>
                <span>starts: {exam.starts}</span>
                <span>ends: {exam.ends}</span>
              </p>
          </div>
         ))
          }
      </div>

    </div>
  )
}

examTimetable.defaultProps = {
  days: [
    {
      id: "1yxbcy",
      name: "Monday",
    },
    {
      id: "2HMbcy",
      name: "Tuesday",
    },
    {
      id: "3IhB79OBt",
      name: "Wednesday",
    },
    {
      id: "4MnhUHb88rrft",
      name: "Thursday",
    },
    {
      id: "5M5H890rft",
      name: "Friday",
    },
    {
      id: "6M5H890rft",
      name: "Saturday",
    },
    {
      id: "7M5H890rft",
      name: "Sunday",
    }
  ],
}

export default examTimetable