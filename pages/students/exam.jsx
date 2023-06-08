import React, { useEffect, useContext } from 'react'
import InfoCard from '../../components/InfoCard'
import DaysFilter from '../../components/DaysFilter'
import Card from '../../components/Card'
import ExamContext from '../../context/timetable/exam/examContext'
import Loader from '../../components/Loader'
import Alert from '../../components/Alert';

const ExamTimetable = ({ days }) => {
  const examContext = useContext(ExamContext);
  const { getExams, currentExams, isLoading, setIsLoading, setCurrentExams, setExamActiveDay } = examContext;
  useEffect(() => {
    const date = new Date();
    const options = { weekday: 'long' };
    const dayName = date.toLocaleDateString('en-US', options);
    getExams();
    setCurrentExams(dayName);
    setExamActiveDay(dayName);
    setIsLoading();
  }, []);

  return (
    <div className='group-timetable'>
      <h1 className='text-2xl mb-2'>Exams timetable</h1>
      <div className="top-cards flex gap-2 w-full mb-8">
        <InfoCard />
        <Card type="students"/>
      </div>

      <div className="modules-timetable mt-[7rem] ">
        <div className="days-filter days-filter flex gap-4 mt-2">
          {days.map((day) => <DaysFilter day={day} type="exams" key={day.date + day.id} />)}
        </div>

        <div className={`modules-sessions timetable bg-main-130 rounded-md py-3 px-4 w-[96%] mt-2 min-h-[48vh] ${currentExams.length != 0 ? 'grid grid-cols-3 gap-3' : ''} `}>
          {isLoading ? <Loader /> : (currentExams.length == 0 ? <Alert message="No Exams for this day" /> : currentExams.map((exam) => <div className="room-timetable " key={exam.code + exam.id + exam.venue + exam.module}>
            <p>{exam.module}</p>
            <p>sub code:{exam.code}</p>
            <p>venue: {exam.venue}</p>
            <p>program: {exam.prog}</p>
            <p>Stream: {exam.stream}</p>
            <p>date: {exam.date}</p>
            <p>day: {exam.day}</p>
            <p>{exam.time}</p>
          </div>
          )
          )
          }
        </div>
      </div>
    </div>
  )
}

ExamTimetable.defaultProps = {
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
    },
    {
      id: "66NjuEDa",
      name: "Saturday",
      date: "28"
    },
    {
      id: "77HuVEDa",
      name: "Sunday",
      date: "29"
    }
  ]
}

export default ExamTimetable