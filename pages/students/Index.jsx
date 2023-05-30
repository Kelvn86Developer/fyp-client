import React, {useEffect,useContext} from 'react'
import PropTypes from 'prop-types'
import Search from '../../components/student/Search'
import Filters from '../../components/student/Filters'
import StudentContext from '../../context/student/studentContext';
import VenuesContext from '../../context/venues/venuesContext';
import Venues from '../../components/student/Venues'

const index = (props) => {
  const studentContext = useContext(StudentContext);
  const venuesContext = useContext(VenuesContext);
  const {getFreeVenues,venues, filterVenues, searchVenues, filtered} = venuesContext;
useEffect(() => {
  getFreeVenues();
}, [venues]);
  const { floor } = props
  return (
    <div>
      <Search />
      <Filters />
      <div className="venues-wrapper mt-6 flex flex-col space-y-1 w-full">
        <h1 className='text-base w-max px-2'>{floor}</h1>
        {filtered.length > 0 ? <Venues venues={filtered}/> :( venues.length > 0 ?<Venues venues={venues}/>: <h1>No venues available</h1> )}
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