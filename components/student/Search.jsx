import React, {useContext} from 'react';
import VenuesContext from '../../context/venues/venuesContext';


const Search = () => {
    const venuesContext =  useContext(VenuesContext);
    const {searchVenues} = venuesContext;
    const search = e =>{
     let params = e.target.value;
     searchVenues(params);
    }
    return (
        <div className='search flex border-main-400 border-[1px] rounded-md w-[40%] relative overflow-hidden focus-within:shadow-md'>
            <button type='button' className="icon-wrapper bg-main-400 text-white w-[16%]">
                <i className="bi bi-search"></i>
            </button>
            <input type="text" className='w-[80%] px-2 py-1 focus:outline-none ' placeholder='search here eg: 120 or th-h' onChange={search} />
        </div>
    )
}

export default Search