import React, {useContext} from 'react'
import Link from 'next/link';
import PropTypes from 'prop-types';

const VenueItem = ({ venue }) => {

    return (
        <>
            <div className="status relative bg-inherit flex items-end mb-4 space-x-1 pb-2 px-4 pt-10">
                <p>status: </p>
                <p>{venue.status}</p>
            </div>
            <div className="class-id pl-4">
                <Link href={`/students/${venue.title}`} ><p className='underline'>class title: {venue.title}</p></Link>
            </div>

            <div className="time px-4">
                <p>
                    time: {venue.time}
                </p>
            </div>

            <div className="seats mt-4 px-4">
                <p>Seats: {venue.seats}</p>
            </div>
        </>
    )
}

VenueItem.propsTypes = {
    venue: PropTypes.object
}

export default VenueItem