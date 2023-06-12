import React from 'react'
import {GoFileSubmodule} from "react-icons/go"
const ExamCard = ({data}) => {
    const {total,dates} = data;
    // get current date, return day of the week, month and date
    const currentDate = new Date();
    const currentDay = currentDate.toLocaleString('en-us', { weekday: 'long' });
    const currentMonth = currentDate.toLocaleString('en-us', { month: 'long' });
    const currentDayOfMonth = currentDate.toLocaleString('en-us', { day: 'numeric' });
    // conactenate the date
    const currentDateString = `${currentDay}, ${currentMonth} ${currentDayOfMonth}`;

    return (
        <div className='bg-ore-130 rounded-md relative flex flex-col text-slate-900 w-[40%] min-h-[42vh] pl-3 pt-2'>
            <div className="icon mt-2 mb-6 w-[16%] h-[22%] bg-white shadow-md rounded-full text-center text-3xl text-main-400 flex items-center justify-center">
                <GoFileSubmodule />
            </div>
            <div className="title  text-xl font-semibold">
                <p>Total exams  {total}</p>
            </div>
            <div className="title mt-4">
                <p>Date of all your invigilation </p>
            </div>
            <div className="title flex text-sm">
                {dates.map((date,index)=>(<span className='text-[13px]' key={index +date.id + date.title}>{date.title}, </span>))}
            </div>

            <div className="current-date absolute bottom-3 left-2">
                <p className='text-sm'>Today is {currentDateString}</p>
            </div>
        </div>
    )
}

ExamCard.defaultProps = {
    data: {
        total: 3,
        dates: [
            {
                id: 1,
                title: "Monday 12th July",

            },
            {
                id: 2,
                title: "Tuesday 13th July",
            },
            {
                id: 3,
                title: "Wednesday 14th July",
            }
        ]
    }
}
export default ExamCard