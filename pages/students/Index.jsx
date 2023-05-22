import React from 'react'
import Search from '../../components/student/Search'
import Filters from '../../components/student/Filters'
import PropTypes from 'prop-types'
import Venues from '../../components/student/Venues'

const index = (props) => {
  const { floor } = props
  return (
    <div>
      <Search />
      <Filters />

      <div className="venues-wrapper mt-6 flex flex-col space-y-1 w-full">
        <h1 className='text-base w-max px-2'>{floor}</h1>
        {/* <div className="venues-container bg-white shadow rounded-md px-2 py-4 grid grid-cols-3 sd:grid-cols-2 gap-5 sd:gap-8 relative">
          {venues.map((venue) => (
            <div className="venue relative overflow-hidden rounded-md flex flex-col space-y-2 pb-8 first:bg-main-130 last-of-type:bg-main-130 even:bg-ash-130 bg-ore-130 text-slate-900" key={venue.id}>
              <div className="status relative bg-main-130 flex items-end mb-4 space-x-1 pb-2 px-4 pt-10">
                <p>status: </p>
                <p>{venue.status}</p>
              </div>
              <div className="class-id px-4">
                <p>class title: {venue.title}</p>
              </div>

              <div className="time px-4">
                <p>
                  time: {venue.time}
                </p>
              </div>

              <div className="seats mt-4 px-4">
                <p>Seats: {venue.seats}</p>
              </div>
            </div>
          ))}
        </div> */}
        <Venues/>
      </div>
    </div>
  )
}

index.defaultProps = {
  floor: "100 - 120",
}

index.propsTypes = {
  floor: PropTypes.string
}

export default index