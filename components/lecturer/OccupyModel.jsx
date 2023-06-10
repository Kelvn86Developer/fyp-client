import React, { useState } from 'react'

const OccupyModel = ({ venue, lecturer, date }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [module, setModule] = useState('Select a module');
    const [modules, setModules] = useState([
        {
            title: "Social networking",
            code: "ITU/CSU 2309"
        },
        {
            title: "Network security",
            code: "ITU/CSU 1890"
        }
    ]);

    const onSelect = (module)=>{
        setIsOpen(!isOpen);
        setModule(module);
    }
    return (
        <div className="model-wrapper absolute  bg-gray-50  w-full h-[120vh] z-10">
            <div className=" relative shadow rounded-sm bg-white px-1 py-2 w-[96%] z-20">
                <div className="header mb-4">
                    <h2 className='text-main-400 font-medium text-lg'>Occupy this venue {venue.title}</h2>
                </div>

                <div className="venues-left-right flex justify-between w-[90%]  h-max pl-2" >
                    <div className="venue-left w-[45%] rounded-md bg-main-130 px-1">
                        <div className="top-content bg-inherit  w-full">
                            <div className="venue-status">
                                <span>Free</span>
                            </div>
                        </div>

                        <div className="bottom-content flex flex-col gap-1">
                            <span>{venue.title}</span>
                            <div className="time flex">
                                <span>Starts: {venue.starts}</span>
                                <span>Ends: {venue.ends}</span>
                            </div>
                            <span>Seats: {venue.seats}</span>
                            <span>Projector: {venue.projector}</span>
                        </div>

                    </div>

                    <div className="venue-right w-[45%] rounded-md bg-main-130 ">
                        <div className="top-content bg-inherit w-full">
                            <div className="venue-status">
                                <span>Occupied</span>
                            </div>
                            <div className="bottom-content flex flex-col gap-1">
                                <span>{venue.title}</span>
                                <div className="time flex">
                                    <span>Starts: {venue.starts}</span>
                                    <span>Ends: {venue.ends}</span>
                                </div>
                                <span>Lecturer/Facilitator: {lecturer.username}</span>
                                <span>Module: Module title sample </span>
                                <span>Code: CSX 1234</span>
                                <span>Seats: {venue.seats}</span>
                                <span>Projector: {venue.projector}</span>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="occupying-form">
                    <span>classroom title: {venue.title}</span>
                    <div className="time flex justify-between w-[60%]">
                        <span>Starts: {venue.starts}</span>
                        <span>Ends: {venue.ends}</span>
                    </div>
                    <div className="date">
                        <span>Date: {date}</span>
                    </div>

                    <div className="form-fields">
                        <div className="form-field">
                            <span>Select a module for this classroom</span>
                            <div className="selections-wrapper relative w-[40%]">
                                <button className={`bg-white rounded p-2 ring-1 ${isOpen ? "ring-main-900" : "ring-gray-300"}`} onClick={()=>setIsOpen(!isOpen)}>{module}</button>

                                {isOpen && <ul className='z-2 absolute mt-2 w-full rounded bg-gray-50 ring-1 ring-gray-300'>
                                    {modules.map((module, index) => (
                                       <li className='cursor-pointer select-none p-2 w-full hover:bg-gray-100' key={index + module.title}>
                                             <button onClick={()=>onSelect(module.title)} className='p-2 bg-transparent border-0 outline-none'>{module.title}</button>
                                       </li>
                                    ))}
                                </ul>}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

OccupyModel.defaultProps = {
    venue: {
        title: "Venue title",
        starts: "12:00",
        ends: "14:00",
        seats: 30,
        projector: "Yes"

    },
    lecturer: {
        username: "Lecturer name"
    },
    date: "12-06-2023"
}

export default OccupyModel