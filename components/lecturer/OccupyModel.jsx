import React, { useState, useContext } from 'react';
import VenuesContext from '../../context/venues/venuesContext';
import LecturerContext from '../../context/lecturer/lecturerContext';
import Loader from '../Loader';

const OccupyModel = ({ venue, lecturer, date }) => {
    const dayNameIndex = {
        Monday: 1,
        Tuesday: 2,
        Wednesday: 3,
        Thursday: 4,
        Friday: 5,
        Saturday: 6,
        Sunday: 0

    }
    const [isOpen, setIsOpen] = useState(false);
    const [module, setModule] = useState('Select a module');
    const [modules, setModules] = useState([
        {
            title: "Social networking",
            code: "ITU/CSU 2309"
        },
        {
            title: "Network security",
            code: "ITU/CSU 1890"
        }
    ]);
    const venuesContext = useContext(VenuesContext);
    const lecturerContext = useContext(LecturerContext);
    const { occupyFreeVenue, activeDay, scheduleFreeingVenues, setShowModel, loading,selectedVenue } = venuesContext;
    const { sessionActiveDay } = lecturerContext;

    const onSelect = (module) => {
        setIsOpen(!isOpen);
        setModule(module);
    }

    // const onClick = ()=> {
    //     let weekdayIndex = dayNameIndex[sessionActiveDay];
    //     const currentTime = new Date();
    //     const currentMonth = currentTime.getMonth();
    //     const currentYear = currentTime.getFullYear();
    //     let currentHours = currentTime.getTime();

    //     const [timeStr, period] = selectedVenue.ends.split(" ");
    //     const [hoursStr, minutesStr] = timeStr.split(":");

    //     let hours = parseInt(hoursStr);
    //     const minutes = parseInt(minutesStr);

    //     if (period.toLowerCase() === "pm" && hours < 12) {
    //         hours += 12;
    //       } else if (period.toLowerCase() === "am" && hours === 12) {
    //         hours = 0;
    //       }
          
    //     const timeToFree = new Date(currentYear, currentMonth, weekdayIndex);

    //     timeToFree.setDate(timeToFree.getDate() + (weekdayIndex + 7 - timeToFree.getDay()) % 7);
    //     timeToFree.setHours(hours);
    //     timeToFree.setMinutes(minutes);
    //     timeToFree.setSeconds(0);
    //     let timeout = timeToFree.getTime();
    //     let timeDiff = timeout - currentHours;
    //     console.log(timeToFree);
    //     // scheduleFreeingVenselectedVenue, timeDiff);
    //     // occupyFreeVenue(venue, sessionActiveDay);
    // }
    const onClick = () => {
        const weekdayIndex = (dayNameIndex[sessionActiveDay] + 1) % 7; // Increment the index to get the next day
        const currentTime = new Date();
        const currentMonth = currentTime.getMonth();
        const currentYear = currentTime.getFullYear();
      
        const [timeStr, period] = selectedVenue.ends.split(" ");
        const [hoursStr, minutesStr] = timeStr.split(":");
        let hours = parseInt(hoursStr);
        const minutes = parseInt(minutesStr);
      
        if (period.toLowerCase() === "pm" && hours < 12) {
          hours += 12;
        } else if (period.toLowerCase() === "am" && hours === 12) {
          hours = 0;
        }
      
        const timeToFree = new Date(currentYear, currentMonth, currentTime.getDate());
        const currentDayOfWeek = timeToFree.getDay();
        
        if (currentDayOfWeek === weekdayIndex) {
          // If the current day matches the desired weekday, keep the current date
          timeToFree.setHours(hours);
          timeToFree.setMinutes(minutes);
          timeToFree.setSeconds(0);
        } else {
          // If the current day is different, find the next occurrence of the desired weekday
          const daysUntilNextWeekday = (weekdayIndex + 7 - currentDayOfWeek) % 7;
          timeToFree.setDate(timeToFree.getDate() + daysUntilNextWeekday);
          timeToFree.setHours(hours);
          timeToFree.setMinutes(minutes);
          timeToFree.setSeconds(0);
        }
      
        const timeout = timeToFree.getTime();
        const timeDiff = timeout - currentTime.getTime();
        console.log(timeDiff);
        // scheduleFreeingVenue(selectedVenue, timeDiff);
        // occupyFreeVenue(venue, sessionActiveDay);
      };
      
    return (
        <div className="model-wrapper absolute backdrop-saturate-200 bg-white/30  w-full h-[120vh] z-10">
         {
            loading ? <Loader/> :(
                <div className=" relative shadow rounded-sm bg-white px-1 py-4 w-[88%] z-20 min-h-[90vh] mt-20 mx-auto">
                <div className="header mb-4 ml-10">
                    <h2 className='text-main-400 font-medium text-lg'>Occupy this venue {selectedVenue.title}</h2>
                </div>

                <div className="venues-left-right flex justify-between w-[90%]  h-max pl-2 mx-auto" >
                    <div className="venue-left w-[45%] rounded-md bg-main-130 overflow-hidden">
                        <div className="top-content relative bg-inherit  w-full min-h-[10vh]">
                            <div className="venue-status absolute bottom-0 left-1 px-2">
                                <span>Free</span>
                            </div>
                        </div>

                        <div className="bottom-content flex flex-col gap-1 px-2 mt-2 py-2">
                            <span>Venue title: {selectedVenue.title}</span>
                            <div className="time flex">
                                <span>Starts: {selectedVenue.starts}</span>
                                <span>Ends: {selectedVenue.ends}</span>
                            </div>
                            <span>Seats: {selectedVenue.seats}</span>
                            <span>Projector: {selectedVenue.projector}</span>
                        </div>

                    </div>

                    <div className="venue-right w-[45%] rounded-md bg-main-130 overflow-hidden">
                        <div className="top-content relative bg-inherit w-full min-h-[10vh]">
                            <div className="venue-status absolute px-2 bottom-0">
                                <span>Occupied</span>
                            </div>
                        </div>
                        <div className="bottom-content flex flex-col gap-1 px-2 mt-2 py-2">
                            <span>Venue title: {selectedVenue.title}</span>
                            <div className="time flex">
                                <span>Starts: {selectedVenue.starts}</span>
                                <span>Ends: {selectedVenue.ends}</span>
                            </div>
                            <span>Lecturer/Facilitator: {lecturer.username}</span>
                            <span>Module: Module title sample </span>
                            <span>Seats: {selectedVenue.seats}</span>
                            <span>Projector: {selectedVenue.projector}</span>
                        </div>
                    </div>

                </div>

                <div className="occupying-form flex flex-col gap-4 mt-6 mb-2 w-[72%] mx-auto">
                    <span>Venue title: {selectedVenue.title}</span>
                    <div className="time flex justify-between w-[60%]">
                        <span>Starts: {selectedVenue.starts}</span>
                        <span>Ends: {selectedVenue.ends}</span>
                    </div>
                    <div className="date">
                        <span>Date: {date}</span>
                    </div>

                    <div className="form-fields">
                        <div className="form-field">
                            <span>Select a module for this classroom</span>
                            <div className="selections-wrapper relative w-[60%]">
                                <button className={`bg-white rounded p-2 ring-1 w-[80%] ${isOpen ? "ring-main-900" : "ring-gray-300"}`} onClick={() => setIsOpen(!isOpen)}>{module}</button>

                                {isOpen && <ul className='z-2 absolute mt-2 w-full rounded bg-gray-50 ring-1 ring-gray-300'>
                                    {modules.map((module, index) => (
                                        <li className='cursor-pointer select-none p-2 w-full hover:bg-gray-100' key={index + module.title}>
                                            <button onClick={() => onSelect(module.title)} className='p-2 bg-transparent border-0 outline-none'>{module.title}</button>
                                        </li>
                                    ))}
                                </ul>}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="btn-groups flex gap-28 w-[72%] mt-8 mx-auto">
                    <button className="bg-main-400 text-white rounded-md px-2 py-1 w-[50%]" onClick={onClick}>Occupy</button>
                    <button className="bg-transparent border-[1px] border-main-400 text-main-400 rounded-md px-2 py-1 w-[50%]" onClick={()=>setShowModel("close")}>Cancel</button>
                </div>
            </div>
            )
         }
        </div>
    )
}

OccupyModel.defaultProps = {
    venue: {
        id: "11BgUo",
        status: "Free",
        title: "120",
        seats: "200",
        projector: "YES",
        starts: "09:00 am",
        ends: "11:00 am",
        floor: "1",
        day: "Monday"

    },
    lecturer: {
        username: "Lecturer name"
    },
    date: "12-06-2023"
}

export default OccupyModel