import React,{useContext, useEffect} from 'react'
import VenuesContext from '../context/venues/venuesContext'
import Venues from './student/Venues';
const SimilarVenues = () => {
  const venuesContext = useContext(VenuesContext);
    const {similarVenues, current, getSimilarVenues} = venuesContext;
   useEffect(() => { 
    getSimilarVenues(current[0]);
   }, [current]);
  return (
    <div className='relative flex flex-col mt-4'>
        <div className="headings flex flex-col gap-4">
            <div className="first-heading">
                <h3>Similar classrooms on the same floor</h3>
            </div>
            <div className="sub-heading flex gap-1 w-[40%]">
                <h4>Second floor</h4>
                <h4>{current[0].range}</h4>
            </div>
        </div>

        <div className="classrooms-wrapper">
           <Venues venues={similarVenues}/>
        </div>
       
    </div>
  )
}

export default SimilarVenues