import React from 'react'
import PropTypes from 'prop-types'

const Filters = ({ranges}) => {
  return (
    <div className='filters mt-4 flex space-x-4 w-[100%]'>
        {ranges.map((range)=>(
            <div key={range.id} className='bg-main-400 text-white text-center relative rounded-md px-1 py-2 w-[14%] hover:shadow hover:bg-main-900'>
                <button type='button' className='bg-transparent w-full'>{range.number}</button>
            </div>
        ))}
    </div>
  )
}

Filters.propsTypes = {
  ranges: PropTypes.array
}

Filters.defaultProps = {
    ranges: [
        {
            id:1,
            number: "100 - 120",
        },
        {
            id:2,
            number: "200 - 220",
        },
        {
            id:3,
            number: "300 - 345", 
        },
        {
            id:4,
            number: "TH A - TH K"
        }
    ],
}
export default Filters