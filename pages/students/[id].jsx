import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router';

const Venue = ({venue, days}) => {
    const router = useRouter();
    const venueId = router.query.id;
  return (
    <div className='venue'>
        <div className="nav-header mb-4 text-slate-400 text-md flex gap-1">
            <Link href='students/index'>Dashboard</Link>
            <p>/{venueId}</p>
        </div>
        
        <div className="details flex w-[64%]">
            <div className="left w-[30%]">
                <p>class title: {venue.title}</p>
                <p>start-time: {venue.starts}</p>
                <p>Total seats: {venue.ends}</p>
            </div>
            <div className="right">
                <p className='text-main-400 font-semibold'>status: {venue.status}</p>
                <p>end-time: {venue.starts}</p>
            </div>
        </div>

        <div className="btn-timer bg-main-400 px-2 py-1 rounded-md mt-4 w-[16%]">
            <button type='button text-center bg-transparent'>
            <i className="bi bi-stopwatch-fill pr-2"></i>
             start timer
            </button>
        </div>

        <div className="calender relative flex flex-col w-[96%]">
            <div className="days-filter flex gap-8 mt-8">
                {days.map((day)=>(
                    <button type='button' className="day-filter first:text-main-400 text-slate-400 text-center text-2xl uppercase first:font-semibold first:underline first:underline-offset-8" key={day.id + day.date}> 
                    <p>{day.name} {day.date}</p>
                    </button>
                ))}
            </div>

            <div className="timetable bg-main-130 rounded-md py-3 px-4 w-[94%] mt-4 grid grid-cols-4 gap-4">
                 <div className="room-timetable">
                    <p>Free</p>
                    <p>No lecture</p>
                    <p>No students</p>
                    <p>07:00 - 09:00</p>
                 </div>
                 <div className="room-timetable">
                    <p>Free</p>
                    <p>No lecture</p>
                    <p>No students</p>
                    <p>07:00 - 09:00</p>
                 </div>
                 <div className="room-timetable">
                    <p>Free</p>
                    <p>No lecture</p>
                    <p>No students</p>
                    <p>07:00 - 09:00</p>
                 </div>
                 <div className="room-timetable">
                    <p>Free</p>
                    <p>No lecture</p>
                    <p>No students</p>
                    <p>07:00 - 09:00</p>
                 </div>
                 <div className="room-timetable">
                    <p>Free</p>
                    <p>No lecture</p>
                    <p>No students</p>
                    <p>07:00 - 09:00</p>
                 </div>
            </div>
        </div>
    </div>
  )
}

Venue.defaultProps = {
    venue: {
        title: "220",
        status: "Free",
        starts: "12:00",
        ends: "13:00",
        seats: "120"
    },
    days: [
        {
            id: 1,
            name: "Monday",
            date: "23"

        },
        {
            id: 2,
            name: "Tuesday",
            date: "24"
        },
        {
            id: 3,
            name: "Wednesday", 
            date: "25"
        },
        {
            id: 4,
            name: "Thursday",
            date: "26"
        },
        {
            id: 5,
            name: "Friday",
            date: "27"
        }
    ]
}

export default Venue