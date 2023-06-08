import React, {useEffect, useContext} from 'react'
import LecturerContext from '../../context/lecturer/lecturerContext'
import Card from '../../components/Card'
import InfoCard from '../../components/lecturer/InfoCard'
import DaysFilter from '../../components/lecturer/DaysFilter'
import Sessions from '../../components/lecturer/Sessions'
import Loader from '../../components/Loader';
import Alert from '../../components/Alert';

const Index = ({days}) => {
  const lecturerContext = useContext(LecturerContext);
  const {setCurrentSessions, setRecentNotifications, sessionActiveDay, Loading, currentSessions, totalNotifications, lastNotification, info} = lecturerContext;
  useEffect(() => {
    setCurrentSessions(sessionActiveDay);
    setRecentNotifications();
  },[sessionActiveDay])
  const notifications = {
    title: "Notifications",
    total: "10",
    last: {
      time: "2 minutes ago",
      from: "Dr Mushi"
    }

  }

  if(Loading || currentSessions === null){
    <Loader/>
  }
  else{
    return (
      <div className='lecturer-home w-full'>
        <div className="top-layer flex gap-3 first:">
          <Card type="lecturer" contents={lastNotification} totalNotifications={totalNotifications}/>
          <InfoCard info={info}/>
        </div>
  
        <div className="header-home mt-8 w-[50%] text-gray-900 text-2xl font-medium">
          <h2>My timetable</h2>
        </div>
  
        <div className="classrooms-sessions mt-2 w-full">
          <div className="lectures-days-filter flex gap-6 w-[96%]">
                {days.map((day)=>(<DaysFilter day={day} key={day.name + day.id}/>))}
          </div>
          <div className="sessions wrapper mt-4">
            {currentSessions.length === 0 ? <div className="alert  bg-white shadow rounded-md px-2 py-4 pl-8 min-h-[40vh]">
              <Alert message="No sessions for this day"/>
            </div> : <Sessions sessions={currentSessions}/>}
            
          </div>
  
        </div>
      </div>
    )
  }

 
}

Index.defaultProps = {
  days: [
    {
        id: "1yxbcy",
        name: "Monday",
        sessions: "3"
    },
    {
        id: "2HMbcy",
        name: "Tuesday",
        sessions: "0",
    },
    {
        id: "3IhB79OBt",
        name: "Wednesday",
        sessions: "2"
    },
    {
        id: "4MnhUHb88rrft",
        name: "Thursday",
        sessions: "1"
    },
    {
        id: "5M5H890rft",
        name: "Friday",
        sessions: "4"
    }
]
}
export default Index