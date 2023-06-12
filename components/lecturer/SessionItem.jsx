import React from 'react'
import Link from 'next/link'

const SessionItem = ({ session }) => {
    return (
        <>
            <div className="status relative bg-inherit flex items-end mb-4 space-x-1 pb-2 px-4 pt-10">
                <p>Module: </p>
                <p>{session.module}</p>
            </div>
            <div className="class-id pl-4 flex justify-between w-[80%]">
                <span>Course: {session.course}</span>
                <span>room: {session.venue}</span>
            </div>
            <div className="status pl-4">
                <span>Status: {session.status}</span>
            </div>
            <div className="time pl-4">
                <p>Time: {session.starts} - {session.ends}</p>
            </div>
            {session.facilitator && <div className="time pl-4">
                <p>Facilitator:{session.facilitator}</p>
            </div>}
            <div className="seats mt-4 pl-4">
                <p>Seats: {session.seats}</p>
            </div>
            <div className="request-btn relative bg-inherit w-[50%] ml-4 py-2 text-center text-gray-900 rounded shadow  hover:shadow-md">
                <Link href={`/lecturer/requestvenues/${session.venue}`} className=' bg-transparent w-full '>Start Requesting</Link>
            </div>
        </>
    )
}

export default SessionItem