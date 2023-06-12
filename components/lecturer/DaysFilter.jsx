import React, { useContext, useEffect } from 'react'
import LecturerContext from '../../context/lecturer/lecturerContext';

const DaysFilter = ({ day, type }) => {

    const lecturerContext = useContext(LecturerContext);
    const { setActiveFilter, sessionActiveDay } = lecturerContext;
    useEffect(() => {
        const date = new Date();
        const currentDay = date.toLocaleString('en-us', { weekday: 'long' });
        if(type !== 'exams'){
            if(currentDay == "Sunday" || currentDay == "Saturday"){
                setActiveFilter("Monday");
                console.log("its monday");
            }else{
                setActiveFilter(currentDay);
            }
        }
        else{
            setActiveFilter(currentDay);
        }
       
        
    }, [])
    const onClick = () => {
        setActiveFilter(day.name);
        // setCurrentSessions(day.name);
    }
    return (
        <div className={`day-filter flex flex-col gap-1 text-gray-900 border-[1px] border-main-400   w-[18%] hover:shadow-md  cursor-pointer ${sessionActiveDay == day.name? 'bg-main-900 text-white': ''} ${day.sessions == undefined? ' py-2 rounded-md text-center': "rounded-sm pl-3"}`} key={day.name + day.sessions} onClick={onClick}>
            <span className='text-lg'>{day.name}</span>
            {day.sessions !== undefined ?  <span>{day.sessions} classes</span>: ""}
        </div>
    )
}


export default DaysFilter