import React, { useContext, useState } from 'react'
import VenuesContext from '../../context/venues/venuesContext';
import LecturerContext from '../../context/lecturer/lecturerContext';
import OccupyModel from './occupyModel';


const VenueItem = ({ venue, lecturer }) => {
    const dayNameIndex = {
        Monday: 1,
        Tuesday: 2,
        Wednesday: 3,
        Thursday: 4,
        Friday: 5

    }

    // get current date in format of dd mm yyyy
    // const currentDate = new Date().toLocaleDateString('en-GB', {
    //     day: 'numeric',
    //     month: 'short',
    //     year: 'numeric'
    // }).split(' ').join('-');

    const venuesContext = useContext(VenuesContext);
    const lecturerContext = useContext(LecturerContext);
    const { occupyFreeVenue, activeDay, scheduleFreeingVenues, setShowModel } = venuesContext;
    const { sessionActiveDay } = lecturerContext;

    const onClick = () => {
        let weekdayIndex = dayNameIndex[sessionActiveDay];
        const currentTime = new Date();
        const currentMonth = currentTime.getMonth();
        const currentYear = currentTime.getFullYear();
        let currentHours = currentTime.getTime();

        const [timeStr, period] = venue.ends.split(" ");
        const [hoursStr, minutesStr] = timeStr.split(":");

        let hours = parseInt(hoursStr);
        const minutes = parseInt(minutesStr);

        if (period.toLowerCase() === "pm" && hours < 12) {
            hours += 12;
          } else if (period.toLowerCase() === "am" && hours === 12) {
            hours = 0;
          }
          
        const timeToFree = new Date(currentYear, currentMonth, weekdayIndex);

        timeToFree.setDate(timeToFree.getDate() + (weekdayIndex + 7 - timeToFree.getDay()) % 7);
        timeToFree.setHours(hours);
        timeToFree.setMinutes(minutes);
        timeToFree.setSeconds(0);
        let timeout = timeToFree.getTime();
        let timeDiff = timeout - currentHours;
        // scheduleFreeingVenues(venue, timeDiff);
        // occupyFreeVenue(venue, sessionActiveDay);
        setShowModel(true);
    };
    return (
        <>
            <div className="status relative bg-inherit flex items-end mb-4 space-x-1 pb-2 px-4 pt-8">
                <p>status: </p>
                <p>{venue.status}</p>
            </div>
            <div className="class-id pl-4">
                <span>venue: {venue.title}</span>
            </div>
            <div className="time px-4 ">
                <span>Starts:{venue.starts}  Ends:{venue.ends}</span>
            </div>
            <div className="seats mt-4 px-4">
                <p>Seats: {venue.seats}</p>
            </div>
            <div className="projector w-[60%] px-4">
                <span>Projector: {venue.projector}</span>
            </div>

            <div className="occupy-btn bg-inherit py-2 rounded-sm w-[46%] text-center shadow-md ml-4 hover:w-[50%] transition">
                <button type='button' className='bg-transparent border-0 outline-none w-full' onClick={onClick}>Occupy now</button>
            </div>
        </>
    )
}

VenueItem.defaultProps = {
    lecturer: {
        id: "12ByH",
        username: "DR Kwesigabo",

    }
}

export default VenueItem