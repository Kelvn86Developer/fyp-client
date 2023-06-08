import React, { useEffect, useContext, use } from 'react'
import InfoCard from '../../components/InfoCard'
import DaysFilter from '../../components/DaysFilter'
import Card from '../../components/Card'
import GroupContext from '../../context/timetable/group/groupContext'
import Loader from '../../components/Loader'
import Alert from '../../components/Alert';

const GroupTimetable = ({ days }) => {
  const groupContext = useContext(GroupContext);
  const { getGroups, isLoading, setIsLoading, setCurrentGroups, current, setActiveDay } = groupContext;
  useEffect(() => {
    const date = new Date();
    const options = { weekday: 'long' };
    const dayName = date.toLocaleDateString('en-US', options);
    getGroups();
    if (dayName === 'Saturday' || dayName === 'Sunday') {
      setCurrentGroups('Monday');
      setActiveDay('Monday');
    }
    else{
      setCurrentGroups(dayName);
      setActiveDay(dayName);
    }
    setIsLoading();
  }, []);

  return (
    <div className='group-timetable'>
      <h1 className='text-2xl mb-2'>Group timetable</h1>
      <div className="top-cards flex gap-2 w-full mb-8">
        <InfoCard />
        <Card />
      </div>

      <div className="modules-timetable mt-[7rem] ">
        <div className="days-filter days-filter flex gap-8 mt-2">
          {days.map((day) => <DaysFilter day={day} type="groups" key={day.date + day.id} />)}
        </div>

        <div className={`modules-sessions timetable bg-main-130 rounded-md py-3 px-4 w-[94%] mt-2 min-h-[48vh] ${current.length != 0 ? 'grid grid-cols-4 gap-4' : ''} `}>
          {isLoading ? <Loader /> : (current.length == 0 ? <Alert message="No sessions for this day" /> : current.map((group) => <div className="room-timetable " key={group.code + group.id + group.venue + group.title}>
            <p>{group.title}</p>
            <p>{group.code}</p>
            <p>{group.venue}</p>
            <p>{group.lecturer}</p>
            <p>{group.stream}</p>
            <p>{group.starts} - {group.ends}</p>
          </div>
          )
          )
          }
        </div>
      </div>
    </div>
  )
}

GroupTimetable.defaultProps = {
  days: [
    {
      id: "2ewdhsacb",
      name: "Monday",
      date: "23"

    },
    {
      id: "eu83290yrh",
      name: "Tuesday",
      date: "24"
    },
    {
      id: "fjNLf32",
      name: "Wednesday",
      date: "25"
    },
    {
      id: "4DW4",
      name: "Thursday",
      date: "26"
    },
    {
      id: "5GVEDa",
      name: "Friday",
      date: "27"
    }
  ]
}

export default GroupTimetable