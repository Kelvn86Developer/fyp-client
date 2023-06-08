import React from 'react';
import PropTypes from 'prop-types'
import SessionItem from './SessionItem';

const Sessions = ({ sessions }) => {
    return (
        <div className="sessions-container bg-white shadow rounded-md px-2 py-4 grid grid-cols-3 sd:grid-cols-2 gap-5 sd:gap-8 relative">
            {sessions.map((session)=>(
                <div className="venue relative overflow-hidden rounded-md flex flex-col space-y-2 pb-8 first:bg-main-130 last-of-type:bg-main-130 even:bg-ash-130 bg-ore-130 text-slate-900" key={session.id}>
                   <SessionItem key={session.id + session.ends } session={session}/>
                </div>
            ))}
        </div>
    )
}

Sessions.propsTypes = {
    sessions: PropTypes.array,
}

Sessions.defaultProps = {
    sessions: [
        {
          id: 1,
          module: "Social Networking",
          course: "BIT",
          venue: "200",
          starts: "07:00",
          ends: "09:00",
          code: "ITU 08112",
          seats: "120",
          status: "lecture"
        },
        {
          id: 2,
          module: "Data communication",
          course: "DOIT 2",
          venue: "200",
          starts: "12:00",
          ends: "03:00",
          code: "ITU 08112",
          seats: "120",
          status: "lecture"
        },
        {
          id: 3,
          module: "Social Networking",
          course: "BIT",
          venue: "200",
          starts: "07:00",
          ends: "09:00",
          code: "ITU 08112",
          seats: "120",
          status: "lecture"
        },
        {
          id: 4,
          module: "Social Networking",
          course: "BIT",
          venue: "200",
          starts: "07:00",
          ends: "09:00",
          code: "ITU 08112",
          seats: "120",
          status: "lecture"
        },
    
      ]
}

export default Sessions