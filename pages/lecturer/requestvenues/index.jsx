import React from 'react'
import DaysFilter from '../../../components/lecturer/DaysFilter'
import VenueItem from '../../../components/lecturer/VenueItem';
import SessionItem from '../../../components/lecturer/SessionItem';
import Sessions from '../../../components/lecturer/Sessions';


const requestClassroom = ({days, sessions}) => {
  const firstFloor = sessions.filter(session => {
    const regex = /^1/gi;
    return session.venue.match(regex);
  });
  const secondFloor = sessions.filter(session => {
    const regex = /^2/gi;
    return session.venue.match(regex);
  });
  const thirdFloor = sessions.filter(session => {
    const regex = /^3/gi;
    return session.venue.match(regex);
  });
  const fourthFloor = sessions.filter(session => {
    const regex = /[abcd]/gi;
    return session.venue.match(regex);
  });
  const fifthFloor = sessions.filter(session => {
    const regex = /[efgh]/gi;
    return session.venue.match(regex);
  });
  return (
    <div className='request-venues'>
      <div className="header text-main-400 text-xl font-medium mb-2">
        <h2>Request venue from Lecturer </h2>
      </div>
       <div className="lecturer-days-filters flex gap-6 w-[96%] mb-4">
        {days.map((day) => (<DaysFilter type='lecturer' day={day} key={day.name + day.id} />))}
       </div>

        <div className="floor mb-6">
          <div className="floor-title text-lg mb-1">100 - 120</div>
          {firstFloor.length >= 0 && <Sessions sessions={firstFloor} />}
        </div>
        <div className="floor mb-6">
          <div className="floor-title text-lg mb-1">200 - 220</div>
          {secondFloor.length >= 0 && <Sessions sessions={secondFloor} />}
        </div>
        <div className="floor mb-6">
          <div className="floor-title text-lg mb-1">300 - 320</div>
          {thirdFloor.length >= 0 && <Sessions sessions={thirdFloor} />}
        </div>
        
    </div>
  )
}

requestClassroom.defaultProps = {
  days: [
    {
      id: "1yxbcy",
      name: "Monday",
    },
    {
      id: "2HMbcy",
      name: "Tuesday",
    },
    {
      id: "3IhB79OBt",
      name: "Wednesday",
    },
    {
      id: "4MnhUHb88rrft",
      name: "Thursday",
    },
    {
      id: "5M5H890rft",
      name: "Friday",
    }
  ],
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
      status: "lecture",
      facilitator: "Mr. John Doe"
    },
    {
      id: 7,
      module: "Social Networking",
      course: "BIT",
      venue: "220",
      starts: "07:00",
      ends: "09:00",
      code: "ITU 08112",
      seats: "120",
      status: "Tutorial",
      facilitator: "Mr. John Doe"

    },
    {
      id: 2,
      module: "Data communication",
      course: "DOIT 2",
      venue: "TH_A",
      starts: "12:00",
      ends: "03:00",
      code: "ITU 08112",
      seats: "120",
      status: "lecture",
      facilitator: "Mr. John Doe"

    },
    {
      id: 3,
      module: "Social Networking",
      course: "BIT",
      venue: "300",
      starts: "07:00",
      ends: "09:00",
      code: "ITU 08112",
      seats: "120",
      status: "lecture",
      facilitator: "Mr. John Doe"
    },
    {
      id: 4,
      module: "Social Networking",
      course: "BIT",
      venue: "100",
      starts: "07:00",
      ends: "09:00",
      code: "ITU 08112",
      seats: "120",
      status: "lecture",
      facilitator: "Mr. John Doe"
    },
    {
      id: 5,
      module: "Social Networking",
      course: "BIT",
      venue: "TH_E",
      starts: "07:00",
      ends: "09:00",
      code: "ITU 08112",
      seats: "120",
      status: "tutorial",
      facilitator: "Mr. John Doe"
    }

  ],
  ranges: [
    {
      id: "1yxbcy",
      title: "100 - 120"
    },
    {
      id: "2HMbcy",
      title: "200 - 220"
    },
    {
      id: "3IhB79OBt",
      title: "300 - 320"
    },
    {
      id: "4MnhUHb88rrft",
      title: "400 - 420"
    },
    {
      id: "5M5H890rft",
      title: "TH_A - TH_D"
    },
    {
      id: "6M5H890rft",
      title: "TH_E - TH_H"
    }
  ]
}

export default requestClassroom