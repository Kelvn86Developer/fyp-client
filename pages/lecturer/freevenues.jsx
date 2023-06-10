import React, { useContext, useEffect, useState } from 'react'
import DaysFilter from '../../components/lecturer/DaysFilter'
import VenueItem from '../../components/lecturer/VenueItem'
import LecturerContext from '../../context/lecturer/lecturerContext';
import VenuesContext from '../../context/venues/venuesContext';
import Loader from '../../components/Loader';
import Alert from '../../components/Alert';
import OccupyModel from '../../components/lecturer/occupyModel';

const Free = ({ days, freeVenues }) => {
  const lecturerContext = useContext(LecturerContext);
  const venuesContext = useContext(VenuesContext);
  const { sessionActiveDay, venues } = lecturerContext;
  const { setLecturerFreeVenues, lecturerFreeVenues, loaded, showModel } = venuesContext;

  useEffect(() => {
    setLecturerFreeVenues(sessionActiveDay, "lecturer");
  }, [sessionActiveDay, venues]);
  return (
    <div>
       {showModel && <OccupyModel/>}
      <div className="page-title text-xl text-main-400 font-medium mb-4">
        <h2>Free venues</h2>
      </div>
      <div className="lectures-days-filter flex gap-6 w-[96%]">
        {days.map((day) => (<DaysFilter type='lecturer' day={day} key={day.name + day.id} />))}
      </div>
      <div className="free-venues-wrapper w-[100%] mt-6">
        <div className="range-header text-xl font-medium">
          <h3>100 - 120 </h3>
        </div>
        {loaded !== true || lecturerFreeVenues == null ? (<div className='free-venues flex rounded-md shadow-md px-2 py-4 min-h-[40vh] pl-4'>
          <Loader />
        </div>) : (<div className="free-venues flex flex-wrap gap-4 rounded-md shadow-md px-2 py-4">
          {lecturerFreeVenues.length == 0 ? (<Alert message="No free venues this day, check on other day" />) : (lecturerFreeVenues.map((venue) => (
            <div className="venue relative overflow-hidden rounded-md flex flex-col space-y-2 pb-8 first:bg-main-130 last-of-type:bg-main-130 even:bg-ash-130 bg-ore-130 text-slate-900 w-[32%]" key={venue.id}>
              <VenueItem venue={venue} />
            </div>
          )))}

        </div>)}


      </div>

     
    </div>
  )
}

Free.defaultProps = {
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
  freeVenues: [
    {
      id: "11BgUo",
      status: "Free",
      title: "120",
      seats: "200",
      projector: "YES",
      starts: "09:00am",
      ends: "11:00am",
      floor: "1",
      day: "Monday"
    },
    {
      id: "22JUUo",
      status: "Free",
      title: "120",
      seats: "200",
      projector: "No",
      starts: "07:00pm",
      ends: "09:00pm",
      floor: "1",
      day: "Monday"
    },
    {
      id: "33NjYUo",
      status: "Free",
      title: "109",
      seats: "200",
      projector: "YES",
      starts: "09:00am",
      ends: "11:00am",
      floor: "2",
      day: "Monday"

    },
    {
      id: "44BhUo",
      status: "Free",
      title: "TH A",
      seats: "250",
      projector: "YES",
      starts: "09:00am",
      ends: "11:00am",
      floor: "4",
      day: "Tuesday"

    }

  ]
}

export default Free