import React, { useContext, useEffect } from 'react'
import Link from 'next/link';
import { AiOutlineInfoCircle } from 'react-icons/ai';
import VenuesContext from '../../context/venues/venuesContext';
import { useRouter } from 'next/router';
import DaysFilter from '../../components/DaysFilter';
import SimilarVenues from '../../components/SimilarVenues';
import Loader from '../../components/Loader';

const Venue = ({ days }) => {
    const router = useRouter();
    const venueId = router.query.id;
    const venueContext = useContext(VenuesContext);
    const { getFreeVenueSessions, sessions, setCurrent, current, loading } = venueContext;

    useEffect(() => {
        const date = new Date();
        // const options = { weekday: 'long', day: 'numeric' };
        // const dayName = date.toLocaleDateString('en-US', { weekday: 'long' });
       
        const fetchData = async () => {
            await getFreeVenueSessions(venueId, 'monday');
            await setCurrent(venueId);
        }
     const updateDays = (days)=> {
         days.map((day)=>{
            return {
                ...day,
                date: date.toLocaleDateString('en-US', { weekday: 'long', day: 'numeric' })
            }
         })
     }
        fetchData();
    }, [venueId]);
    if (loading || current[0] === undefined) {
        return (
            <Loader />
        )
    }
    else {
        return (
            <div className='venue'>
                <div className="nav-header mb-4 text-slate-400 text-md flex gap-1">
                    <Link href='students/index'>Dashboard</Link>
                    <p>/{venueId}</p>
                </div>

                <div className="details flex w-[64%]">
                    <div className="left w-[30%]">
                        <p>class title: {current[0].title}</p>
                        <p>start-time: {current[0].time}</p>
                        <p>Total seats: {current[0].seats}</p>
                    </div>
                    <div className="right">
                        <p className='text-main-400 font-semibold'>status: {current[0].status}</p>
                        <p>end-time: {current[0].time}</p>
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
                        {days.map((day) => (
                            <DaysFilter day={day} venueId={venueId} type="venues" key={day.id + day.name} />
                        ))}
                    </div>
                    {sessions.length == 0 ? (
                        <div className='timetable bg-main-130 rounded-md py-3 px-4 w-[94%] mt-4 min-h-[48vh]'>
                            <div className='flex ml-[24%] items-center gap-4 min-h-[40vh] '>
                                <AiOutlineInfoCircle className="text-main-400 text-3xl" />
                                <h1 className='w-[80%] text-xl'>No free sessions available now</h1>
                            </div>
                        </div>
                    ) : (
                        <div className='timetable bg-main-130 rounded-md py-3 px-4 w-[94%] mt-4 min-h-[48vh] grid grid-cols-4 gap-4'>
                            {sessions.map((session) => (
                                <div className="room-timetable" key={session.starts + session.venue}>
                                    <p>Free</p>
                                    <p>No lecture</p>
                                    <p>No students</p>
                                    <p>{session.starts} - {session.ends}</p>
                                </div>
                            ))}
                        </div>
                    )}

                    <>
                        <SimilarVenues />
                    </>
                </div>
            </div>
        )
    }

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