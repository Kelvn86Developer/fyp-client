import React from 'react';
import PropTypes from 'prop-types'
import VenueItem from './VenueItem';

const Venues = ({ venues }) => {
    return (
        <div className="venues-container bg-white shadow rounded-md px-2 py-4 grid grid-cols-3 sd:grid-cols-2 gap-5 sd:gap-8 relative">
            {venues.map((venue)=>(
                <div className="venue relative overflow-hidden rounded-md flex flex-col space-y-2 pb-8 first:bg-main-130 last-of-type:bg-main-130 even:bg-ash-130 bg-ore-130 text-slate-900" key={venue.id}>
                    <VenueItem venue={venue} key={venue.id + venue.title} />
                </div>
            ))}
        </div>
    )
}

Venues.propsTypes = {
    venues: PropTypes.array,
}

Venues.defaultProps = {
    venues: [
        {
          id: 1,
          status: "free",
          title: "100",
          time: "07:00 - 09:00 am",
          seats: "120"
        },
        {
          id: 2,
          status: "free",
          title: "120",
          time: "07:00 - 09:00 am",
          seats: "120"
        },
        {
          id: 3,
          status: "free",
          title: "110",
          time: "08:00 - 09:00 am",
          seats: "120"
        },
        {
          id: 4,
          status: "free",
          title: "119",
          time: "09:00 - 10:00 am",
          seats: "120"
        },
    
      ]
}

export default Venues