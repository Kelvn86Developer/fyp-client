import React, { useState } from 'react';
import { useRouter } from 'next/router';

const Venue = () => {
    const router = useRouter();
    const { venue } = router.query;
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

    const onSelect = (module) => {
        setIsOpen(!isOpen);
        setModule(module);
    }
    return (
        <div>
            <div className="header mb-4 text-xl font-medium">
                <h4>Send request to this venue {venue}</h4>
            </div>

            <div className="venue-owner-details w-[48%] flex flex-col gap-2">
                <div className="lecturer text-main-400 font-semibold">
                    <h4>Lecturer/Facilitator: Dr Kwesigabo, MO</h4>
                </div>
                <div className="course">
                    <h4>Course: BSc. Computer Science</h4>
                </div>
                <div className="year-of-study">
                    <h4>Year of study: 3</h4>
                </div>
                <div className="venue-title">
                    <h4>Venue: {venue}</h4>
                </div>
                <div className="venue-time flex justify-between">
                    <span>Start time: 12:00pm</span>
                    <span>End time: 2:00pm</span>
                </div>
            </div>

            <div className="venue-coming-lectures mt-8 mb-6">
                <h4 className='text-lg font-medium'>Coming Sessions</h4>
                <div className="coming-sessions wrapper flex flex-wrap px-2 py-4 bg-main-130 rounded w-[88%]">
                    <div className="session w-[32%]">
                        <h4>Dr Mushi</h4>
                        <p>Course: BSc. Computer Science</p>
                        <div className="time flex gap-2">
                            <span>Start time: 12:00pm</span>
                            <span>End time: 2:00pm</span>
                        </div>
                    </div>
                    <div className="session w-[32%]">
                        <h4>Dr Mushi</h4>
                        <p>Course: BSc. Computer Science</p>
                        <div className="time flex gap-2">
                            <span>Start time: 12:00pm</span>
                            <span>End time: 2:00pm</span>
                        </div>
                    </div>
                    <div className="session w-[32%]">
                        <h4>Dr Mushi</h4>
                        <p>Course: BSc. Computer Science</p>
                        <div className="time flex gap-2">
                            <span>Start time: 12:00pm</span>
                            <span>End time: 2:00pm</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="requesting-form relative overflow-hidden w-[88%] mt-8">
                <div className="form relative w-full bg-main-130 px-3 py-2 min-h-[48vh]">
                    <h1 className='text-xl text-gray-900 mb-4 font-medium'>Send request to this venue </h1>
                    <div className="request-details flex flex-col gap-4 w-[80%]">
                        <span>To: Dr Lupiana</span>
                        <div className="form-field flex justify-between">
                            <span>Subject for this request:</span>
                            <div className="selections-wrapper relative w-[60%]">
                                <button className={`bg-inherit rounded p-2 ring-1 w-[80%] ${isOpen ? "ring-main-900" : "ring-gray-300"}`} onClick={() => setIsOpen(!isOpen)}>{module}</button>

                                {isOpen && <ul className='z-2 absolute mt-2 w-full rounded bg-white shadow ring-1 ring-gray-300'>
                                    {modules.map((module, index) => (
                                        <li className='cursor-pointer select-none p-2 w-full hover:bg-ash-130' key={index + module.title}>
                                            <button onClick={() => onSelect(module.title)} className='p-2 bg-transparent border-0 outline-none'>{module.title}</button>
                                        </li>
                                    ))}
                                </ul>}
                            </div>
                        </div>

                        <div className="from">
                            <span>From: Dr Kwesigabo</span>
                        </div>
                        <div className="btn-submit-request relative bg-ash-130 w-[40%] mt-16 text-center rounded">
                            <button className=' text-gray-900 px-2 py-2 text-center rounded'>Send request</button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Venue